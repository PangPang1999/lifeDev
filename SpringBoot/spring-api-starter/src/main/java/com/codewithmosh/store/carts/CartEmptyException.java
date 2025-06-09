package com.codewithmosh.store.carts;

// 新建异常类并增加自定义信息
public class CartEmptyException extends RuntimeException {
    public CartEmptyException() {
        super("Cart is empty");
    }
}
