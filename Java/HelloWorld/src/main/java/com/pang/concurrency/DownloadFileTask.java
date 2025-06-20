package com.pang.concurrency;

public class DownloadFileTask implements Runnable {
    private DownloadStatus status;

    public DownloadFileTask(DownloadStatus status) {
        this.status = status;
    }

    @Override
    public void run() {
        System.out.println("Downloading a file: " + Thread.currentThread().getName());

        for (int j = 0; j < 1_000_000; j++) {
            if (Thread.currentThread().isInterrupted()) return;
            status.increaseTotalBytes();
        }

        System.out.println("Download complete: " + Thread.currentThread().getName());
    }
}
