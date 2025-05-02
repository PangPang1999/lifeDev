package com.pang.executors;

import java.util.concurrent.*;
import java.util.function.Supplier;

public class ExecutorsDemo {
    public static void show() {

        var future = CompletableFuture.supplyAsync(() -> {
            return 1 / 0; // 算术异常
        });

        // 不报错也没有输出
        CompletableFuture<Void> future2 = future.thenAccept(f -> System.out.println(f));
    }
}