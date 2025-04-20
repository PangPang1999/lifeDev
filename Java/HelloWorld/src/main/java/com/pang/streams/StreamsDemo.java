package com.pang.streams;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Stream;

public class StreamsDemo {
    public static void show() {
        List<Movie> movies = List.of(
                new Movie("a", 10),
                new Movie("b", 15),
                new Movie("c", 20),
                new Movie("d", 10)
        );

        movies.stream()
                .filter(m -> m.getLikes() > 10)
                .peek(m -> System.out.println("filter+: " + m.getTitle()))  // 调试：过滤后元素
                .map(Movie::getTitle)
                .peek(title -> System.out.println("mapped: " + title))  // 调试：映射后标题
                .forEach(System.out::println);
    }
}
