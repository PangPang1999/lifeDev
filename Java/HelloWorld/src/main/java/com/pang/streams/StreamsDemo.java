package com.pang.streams;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class StreamsDemo {
    public static void show() {
        //无限流
        // Stream.iterate(1,n->n+1).forEach(System.out::println);
        // 限制10次
        Stream.iterate(1,n->n+1)
                .limit(10)
                .forEach(System.out::println);
    }
}
