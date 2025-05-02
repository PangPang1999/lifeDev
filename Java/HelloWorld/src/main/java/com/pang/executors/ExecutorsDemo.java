package com.pang.executors;

import java.util.concurrent.*;
import java.util.function.Supplier;

public class ExecutorsDemo {
    public static void show() {
        // 模拟第一个任务是拿到美元数额，第二个任务是拿到汇率
        var first = CompletableFuture
                .supplyAsync(() -> "20USB")
                .thenApply(str -> {
                    var price = str.replace("USB", "");
                    return Integer.parseInt(price);
                });
        var second = CompletableFuture.supplyAsync(() -> 0.9);

        first
                .thenCombine(second, (price, exchange) -> price * exchange)
                .thenAccept(System.out::println);
    }
}