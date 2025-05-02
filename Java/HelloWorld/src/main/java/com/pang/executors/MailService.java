package com.pang.executors;

import java.util.concurrent.CompletableFuture;

public class MailService {
    public void send() {
        System.out.println("Sending mail...");
        LongTask.simulate();// 之前创建，sleep 3秒
        System.out.println("Mail was sent.");
    }

    public CompletableFuture<Void> sendAsync() {
        return CompletableFuture.runAsync(() -> send());
    }
}
