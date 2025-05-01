package com.pang.executors;

import java.util.concurrent.*;
import java.util.function.Supplier;

public class ExecutorsDemo {
    public static void show() {
        // ForkJoinPool forkJoinPool = ForkJoinPool.commonPool();
        Runnable task1 = () -> System.out.println("a");
        CompletableFuture<Void> future1 = CompletableFuture.runAsync(task1);

        Supplier<Integer> task2 = () -> 1;
        CompletableFuture<Integer> future2 = CompletableFuture.supplyAsync(task2);

        try {
            Integer result = future2.get();
            System.out.println(result);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        } catch (ExecutionException e) {
            throw new RuntimeException(e);
        }
    }
}