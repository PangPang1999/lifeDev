package com.codewithmosh.store;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class AppConfig {

    @Value("$payment-gateway")
    private String paymentGateway;

    @Bean
    @Primary
    public PaymentService stripe() {
        return new StripePaymentService();
    }

    @Bean
    public PaymentService paypal() {
        return new PayPalPaymentService();
    }

    // @Bean
    // public OrderService orderService() {
    // if (paymentGateway.equals("stripe")) return new OrderService(stripe());
    // else return new OrderService(paypal());
    // }

    @Bean
    public OrderService orderService(@Qualifier("paypal") PaymentService paymentService) {
        return new OrderService(paymentService);
    }
}
