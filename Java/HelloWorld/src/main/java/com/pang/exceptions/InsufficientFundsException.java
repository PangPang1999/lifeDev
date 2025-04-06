package com.pang.exceptions;

public class InsufficientFundsException extends Exception {
    // 默认构造方法
    public InsufficientFundsException() {
        super("Insufficient funds in your account");
    }

    // 接受自定义消息的构造方法
    public InsufficientFundsException(String message) {
        super(message);
    }
}
