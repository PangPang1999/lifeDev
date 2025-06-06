package com.codewithmosh.store.services;

import com.codewithmosh.store.dtos.CheckoutRequest;
import com.codewithmosh.store.dtos.CheckoutResponse;
import com.codewithmosh.store.entities.Order;
import com.codewithmosh.store.exceptions.CartEmptyException;
import com.codewithmosh.store.exceptions.CartNotFoundException;
import com.codewithmosh.store.repositories.CartRepository;
import com.codewithmosh.store.repositories.OrderRepository;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@RequiredArgsConstructor// 为所有标注了 final 以及 @NonNull（即便没有标记final）的字段生成构造函数
@Service
public class CheckoutService {
    private final CartRepository cartRepository;
    private final OrderRepository orderRepository;
    private final AuthService authService;
    private final CartService cartService;

    @Value("${websiteUrl}")
    private String websiteUrl;

    public CheckoutResponse checkout(CheckoutRequest request) throws StripeException {
        // 根据请求中的 cartId 查询包含商品项的购物车
        var cart = cartRepository.getCartWithItems(request.getCartId()).orElse(null);
        if (cart == null) {
            throw new CartNotFoundException();
        }

        if (cart.isEmpty()) {
            throw new CartEmptyException();
        }
        // 从购物车生成订单对象，并绑定当前登录用户
        var order = Order.fromCart(cart, authService.getCurrentUser());
        // 将订单保存到数据库（此时状态为 PENDING）
        orderRepository.save(order);

        // 构建 Stripe Checkout Session 的参数
        var builder = SessionCreateParams.builder()
                .setMode(SessionCreateParams.Mode.PAYMENT)// 设置为支付模式
                .setSuccessUrl(websiteUrl + "/checkout-success?orderId=" + order.getId())// 支付成功回调 URL
                .setCancelUrl(websiteUrl + "/checkout-cancel");// 支付取消回调 URL

        // 为每个订单项创建 Stripe 的 line item
        order.getItems().forEach(item -> {
            var lineItem = SessionCreateParams.LineItem.builder()
                    .setQuantity(Long.valueOf(item.getQuantity()))// 商品数量
                    .setPriceData(
                            SessionCreateParams.LineItem.PriceData.builder()
                                    .setCurrency("usd")// 设置货币单位
                                    .setUnitAmountDecimal(
                                            item.getUnitPrice()// 商品单价（此处单位为最小货币单位分）
                                                    .multiply(BigDecimal.valueOf(100))
                                    )
                                    .setProductData(
                                            SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                                    .setName(item.getProduct().getName())// 商品名称
                                                    .build()
                                    )
                                    .build()
                    ).build();
            // 将 line item 添加到 checkout session 中
            builder.addLineItem(lineItem);
        });
        // 调用 Stripe SDK 创建 Checkout Session
        var session = Session.create(builder.build());
        // 清空购物车（避免用户重复提交）
        cartService.clearCart(cart.getId());
        // 返回包含 orderId 和 Stripe 结账页面 URL 的响应对象
        return new CheckoutResponse(order.getId(), session.getUrl());
    }
}