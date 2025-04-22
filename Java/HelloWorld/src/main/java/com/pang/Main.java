package com.pang;

import com.pang.concurrency.DownloadFileTask;
import com.pang.concurrency.MyThread;
import com.pang.generics.*;
import com.pang.lambdas.LambdasDemo;
import com.pang.streams.StreamsDemo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println(Thread.currentThread().getName());
        // for (int i = 0; i < 10; i++) {
        //     Thread thread = new Thread(() -> System.out.println("Download a file" + Thread.currentThread().getName()));
        //     thread.start();
        // }
        for (int i = 0; i < 10; i++) {
            MyThread myThread = new MyThread();
            myThread.start();
        }
    }
}