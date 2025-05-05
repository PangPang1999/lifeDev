package com.pang.executors;

import java.util.List;
import java.util.Random;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class FlightService {

    public Stream<CompletableFuture<Quote>> getQuotes(List<String> sites) {
        return sites.stream().map(this::getQuote);
    }

    public CompletableFuture<Quote> getQuote(String siteName) {
        return CompletableFuture.supplyAsync(() -> {
            System.out.println("Getting a quote from " + siteName);

            var random = new Random();
            // 模拟任务耗时
            LongTask.simulate(random.nextInt(3));
            // 模拟获取到的价格
            var price = 100 + random.nextInt(10);
            return new Quote(siteName, price);
        });
    }
}
