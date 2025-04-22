package com.pang.concurrency;

public class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("MyThread.run"+Thread.currentThread().getName());
    }
}
