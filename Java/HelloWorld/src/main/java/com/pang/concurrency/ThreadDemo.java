package com.pang.concurrency;

import java.util.*;

public class ThreadDemo {
    public static void show() {
        // Collection<Integer> collection = new ArrayList<>();
        Collection<Integer> collection
                = Collections.synchronizedCollection(new ArrayList<Integer>());

        var thread1 = new Thread(() -> {
            collection.addAll(Arrays.asList(1, 2, 3));
        });
        var thread2 = new Thread(() -> {
            collection.addAll(Arrays.asList(4, 5, 6));
        });

        thread1.start();
        thread2.start();

        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        System.out.println(collection);
    }
}