package com.pang.concurrency;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public class ThreadDemo {
    public static void show() {
        Map<Integer,String> map = new ConcurrentHashMap<>();
        map.put(1,"a");
        map.get(1);
        map.remove(1);
    }
}