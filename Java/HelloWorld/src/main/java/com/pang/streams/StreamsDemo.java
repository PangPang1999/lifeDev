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
                new Movie("c", 20)
        );

        movies.stream()
                .filter(movie -> movie.getLikes() > 10)
                .forEach(m -> System.out.println(m.getTitle()));
    }
}
