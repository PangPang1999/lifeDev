package com.pang.generics;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

public class CollectionsDemo {
    public static void show() {
        Collection<String> collection = new ArrayList<>();

        // 单个添加元素
        collection.add("a");
        collection.add("b");
        collection.add("c");

        // 批量添加元素
        Collections.addAll(collection, "d", "e");

        // 删除单个元素
        collection.remove("a");

        // 判断元素存在
        boolean hasB = collection.contains("b");

        // 获取集合大小
        int size = collection.size();

        // 转换为 Object[] 数组
        Object[] objectArray = collection.toArray();

        // 转换为指定类型数组
        String[] stringArray = collection.toArray(new String[0]);

        // 遍历集合
        for (var item : collection)
            System.out.println(item);

        // 清空集合
        collection.clear();

        // 判断集合是否为空
        boolean isEmpty = collection.isEmpty();

        Collection<String> other = new ArrayList<String>();
        // 将整个 list 添加到 other
        other.addAll(collection);

        System.out.println("包含'b': " + hasB);
        System.out.println("集合大小: " + size);
        System.out.println("是否为空: " + isEmpty);
        System.out.println("collection == other: " + (collection == other));// false
        System.out.println("collection equals other: " + (collection.equals(other)));//true
    }
}