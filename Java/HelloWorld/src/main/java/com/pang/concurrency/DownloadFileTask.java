package com.pang.concurrency;

public class DownloadFileTask implements Runnable {
    @Override
    public void run() {
        System.out.println("Download a file" + Thread.currentThread().getName());
    }
}
