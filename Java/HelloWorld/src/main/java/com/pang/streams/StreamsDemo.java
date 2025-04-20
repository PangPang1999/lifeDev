package com.pang.streams;

import java.util.ArrayList;
import java.util.Arrays;
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

        // limit 截取前两个
        // movies.stream().limit(2).forEach(System.out::println);

        // skip 跳过前两个
        // movies.stream().skip(2).forEach(System.out::println);

        // takeWhile 不满足时停止，即使后续有元素满足条件也不会被筛选
        // movies.stream().takeWhile(movie -> movie.getLikes() < 20).forEach(System.out::println);

        // dropWhile 不满足时开始筛选，即使后续有元素满足条件也不会被筛选，即使后续有元素满足条件也会被筛选
        movies.stream().dropWhile(movie -> movie.getLikes() < 20).forEach(System.out::println);
    }
}
