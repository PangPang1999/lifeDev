package com.pang.concurrency;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;

public class ThreadDemo {
    public static void show() {
        var status = new DownloadStatus();

        List<Thread> threads = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            var thread = new Thread(() -> {
                System.out.println("Downloading a file: " + Thread.currentThread().getName());

                for (int j = 0; j < 10_000; j++) {
                    if (Thread.currentThread().isInterrupted()) return;
                    // System.out.println("Downloading byte " + j);
                    status.increaseTotalBytes();
                }

                System.out.println("Download complete: "+Thread.currentThread().getName());
            });
            thread.start();
            threads.add(thread);
        }

        for (var thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }

        System.out.println(status.getTotalBytes());
    }
}
