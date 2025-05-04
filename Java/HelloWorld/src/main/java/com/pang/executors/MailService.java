package com.pang.executors;

import java.util.concurrent.CompletableFuture;

public class MailService {
    public void sendMail() {
        System.out.println("Sending mail...");
        // 模拟邮件发送
        LongTask.simulate(5);
        System.out.println("Mail was sent.");
    }

    public CompletableFuture<Void> sendMailAsync() {
        return CompletableFuture.runAsync(() -> sendMail());
    }
}
