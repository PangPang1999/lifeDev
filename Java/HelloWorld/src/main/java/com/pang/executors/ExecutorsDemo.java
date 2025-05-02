package com.pang.executors;

import java.util.concurrent.*;
import java.util.function.Supplier;

public class ExecutorsDemo {
    public static void show() {
        System.out.println("Starting multiple async tasks...");

        CompletableFuture<Integer> task1 = CompletableFuture.supplyAsync(() -> 1);

        CompletableFuture<String> task2 = CompletableFuture.supplyAsync(() -> "Task2 Result");

        CompletableFuture<Void> task3 = CompletableFuture.runAsync(() -> System.out.println("Task 3 finished."));

        // 等待 task1, task2, task3 全部完成
        CompletableFuture<Void> allDoneFuture = CompletableFuture.allOf(task1, task2, task3);

        // 当 allDoneFuture 完成时 (即所有任务都完成时)，执行 thenRun 中的代码
        allDoneFuture.thenRun(() -> {
            try {
                var result1 = task1.get();
                System.out.println(result1);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            } catch (ExecutionException e) {
                throw new RuntimeException(e);
            }

            System.out.println(">>> All tasks completed successfully (or exceptionally). Subsequent action triggered.");
        });
    }
}