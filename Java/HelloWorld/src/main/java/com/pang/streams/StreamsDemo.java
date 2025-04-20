package com.pang.streams;

import java.util.*;
import java.util.stream.Stream;

public class StreamsDemo {
    public static void show() {
        List<Movie> movies = List.of(
                new Movie("a", 10),
                new Movie("b", 15),
                new Movie("c", 20),
                new Movie("d", 10)
        );

        // 统计所有喜欢
        int sum = movies.stream()
                .map(movie -> movie.getLikes())
                .reduce(0, Integer::sum); // 使用方法引用简化
                 // .reduce((a, b) -> a + b);

        System.out.println(sum);
    }
}
