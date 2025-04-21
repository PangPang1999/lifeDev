package com.pang.streams;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class StreamsDemo {
    public static void show() {
        // 使用of创建
        // IntStream.of(1, 2, 3, 4, 5).forEach(System.out::println);

        // range 创建（不含最后一位）-专用方法
        // IntStream.range(1, 10).forEach(System.out::println);//输出1-9

        // rangeClosed 创建（含最后一位）-专用方法
        IntStream.rangeClosed(1, 10).forEach(System.out::println);//输出1-10
    }
}
