package com.pang.executors;

import java.util.concurrent.*;
import java.util.function.Supplier;

public class ExecutorsDemo {
    public static void show() {
        var first = CompletableFuture.supplyAsync(() -> {
            LongTask.simulate();
            return 19;
        });

        var second = CompletableFuture.supplyAsync(() -> 20);

        CompletableFuture
                .anyOf(first, second)
                .thenAccept(temp -> System.out.println(temp));
    }
}