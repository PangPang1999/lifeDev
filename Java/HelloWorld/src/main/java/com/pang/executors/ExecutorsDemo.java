package com.pang.executors;

import java.util.concurrent.*;
import java.util.function.Supplier;

public class ExecutorsDemo {
    public static void show() {

        var future = CompletableFuture.supplyAsync(() -> {
            System.out.println("Getting the current weather");
            // 模拟操作失败
            throw new IllegalStateException();
            // return 100; // 这行不会执行
        });

        try {
            // future.get();
            var temperature = future.exceptionally(ex -> -1).get();
            System.out.println(temperature);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        } catch (ExecutionException e) {
            throw new RuntimeException(e);
        }
    }
}