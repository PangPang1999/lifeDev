package com.pang.executors;

import java.util.concurrent.*;

public class ExecutorsDemo {
    public static void show() {
        ExecutorService executorService = Executors.newFixedThreadPool(2);
        try {
            Future<Integer> future = executorService.submit(() -> {
                LongTask.simulate();
                return 1;
            });

            System.out.println("Do more work");
            try {
                var result = future.get();
                System.out.println(result);
            } catch (InterruptedException | ExecutionException e) {
                throw new RuntimeException(e);
            }

        } finally {
            executorService.shutdown();
        }
    }
}