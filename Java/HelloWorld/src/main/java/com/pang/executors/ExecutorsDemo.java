package com.pang.executors;

import java.util.concurrent.*;
import java.util.function.Supplier;

public class ExecutorsDemo {
    public static void show() {

        Supplier<Integer> supplier = () -> {
            // 测试耗时任务
            // try {
            //     Thread.sleep(1000);
            // } catch (InterruptedException e) {
            //     throw new RuntimeException(e);
            // }
            return 1;
        };

        var future = CompletableFuture.supplyAsync(supplier);

        future.thenAccept(result -> {
            System.out.println(result);
            System.out.println(Thread.currentThread().getName());
        });


        // 主线程休眠2秒
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}