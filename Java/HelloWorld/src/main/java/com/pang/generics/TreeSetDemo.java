package com.pang.generics;

import java.util.Set;
import java.util.TreeSet;

public class TreeSetDemo {
    public static void show() {
        Set<Integer> treeSet = new TreeSet<>();
        treeSet.add(3);
        treeSet.add(1);
        treeSet.add(2);
        System.out.println(treeSet); // 输出自然排序后的元素 [1, 2, 3]
    }
}
