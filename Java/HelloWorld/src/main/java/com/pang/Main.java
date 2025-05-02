package com.pang;

import com.pang.executors.MailService;

public class Main {
    public static void main(String[] args) {
        var service = new MailService();
        service.sendAsync();
        System.out.println("Hello World!");

        // 延长主线程，避免结束后异步线程没有执行完（粗暴方法）
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}