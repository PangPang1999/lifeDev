package com.pang.executors;

import java.util.concurrent.*;
import java.util.function.Supplier;

public class ExecutorsDemo {
    public static CompletableFuture<String> getUserEmailAsycn(String id) {
        return CompletableFuture.supplyAsync(() -> "email");
    }

    public static CompletableFuture<String> getPlaylistAsycn(String email) {
        return CompletableFuture.supplyAsync(() -> "playlist");
    }

    public static void show() {
        // 模拟通过id拿到email，再通过email拿到playlist的过程
        getUserEmailAsycn("id123")
                .thenCompose(ExecutorsDemo::getPlaylistAsycn)
                .thenAccept(playlist -> System.out.println(playlist));
    }
}