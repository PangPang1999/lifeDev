package com.pang.generics;


import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ListDemo {
    public static void show() {
        List<String> list = new ArrayList<>();

        // 添加元素
        list.add("a");
        list.add("b");
        list.add("c");

        // 指定索引插入元素
        list.add(0, "!");

        // 批量添加元素
        Collections.addAll(list, "d", "e", "a");

        // 修改元素
        list.set(0, "g");

        // 删除元素
        list.remove(0);          // 根据索引删除
        list.remove("c");        // 根据内容删除

        // 查找元素位置
        int firstB = list.indexOf("b");        // 首次出现的位置
        int lastA = list.lastIndexOf("a");     // 最后一次出现的位置

        // 获取子列表（[fromIndex, toIndex)）
        List<String> subList = list.subList(1, 3);

        // 遍历打印结果
        for (String item : list)
            System.out.println(item);

        System.out.println("第一个'b'的位置：" + firstB);
        System.out.println("最后一个'a'的位置：" + lastA);
        System.out.println("子列表：" + subList);
    }
}