package com.pang.generics;

import java.util.ArrayDeque;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;

public class QueueDemo {
    public static void show(){
        // Queue<String> queue = new ArrayDeque<>();
        // // 添加元素到队尾
        // queue.add("C");
        // queue.add("A");
        // queue.add("B");
        // // 使用 offer 方法安全添加元素
        // queue.offer("D");
        //
        // // 查看队首元素（不移除）
        // System.out.println("Queue peek: " + queue.peek());
        // // 删除队首元素
        // System.out.println("Removed: " + queue.remove());
        // // 打印整个队列
        // System.out.println("Queue: " + queue);


        Queue<String> priorityQueue = new PriorityQueue<>();
        // 根据字符串的自然顺序排序
        priorityQueue.add("D");
        priorityQueue.add("C");
        priorityQueue.add("A");
        priorityQueue.add("B");

        System.out.println("Priority Queue: " + priorityQueue);
        // 删除队首元素观察排序结果
        System.out.println("Removed: " + priorityQueue.poll());
        System.out.println("Priority Queue after poll: " + priorityQueue);
        // 删除队首元素观察排序结果
        System.out.println("Removed: " + priorityQueue.poll());
        System.out.println("Priority Queue after poll: " + priorityQueue);
        // 删除队首元素观察排序结果
        System.out.println("Removed: " + priorityQueue.poll());
        System.out.println("Priority Queue after poll: " + priorityQueue);

    }
}
