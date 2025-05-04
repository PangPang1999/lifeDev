package com.pang.executors;

import java.util.concurrent.Callable;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.function.Supplier;

public class ExecutorsDemo {
    public static void show() {
        var first = CompletableFuture.supplyAsync(() -> {
            LongTask.simulate(10);
            return 19;
        });

        var second = CompletableFuture.supplyAsync(() -> {
            LongTask.simulate(1);
            return 20;
        });

        CompletableFuture
                .anyOf(first, second)
                .thenAccept(temp -> System.out.println(temp))
                .join();


    }
}