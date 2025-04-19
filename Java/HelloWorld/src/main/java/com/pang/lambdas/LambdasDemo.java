package com.pang.lambdas;

import java.util.List;
import java.util.function.BinaryOperator;
import java.util.function.Consumer;
import java.util.function.Function;

public class LambdasDemo {
    public static void show() {
        List<Integer> list = List.of(1, 2, 3);

        // 传统方式遍历
        for (var item : list) {
            System.out.println(item);
        }

        // 创建匿名内部类，实现 Consumer 接口的 accept 方法，打印每个传入的值
        Consumer<Integer> consumer = new Consumer<Integer>() {
            @Override
            public void accept(Integer i) {
                System.out.println(i);
            }
        };

        // 通过 lambda 表达式实例化了一个 Consumer<Integer> 的函数式接口
        Consumer<Integer> c = i -> System.out.println(i);

        // c 引用的是 JVM 在运行时通过 invokedynamic 生成的、实现了 Consumer 接口的函数式对象
        // 调用 Iterable.forEach，内部对列表中的每个元素执行 c.accept(e)，也就是打印该元素
        list.forEach(c);

        // 将前两步的步骤合成一步，也就是下面的代码
        list.forEach(item -> System.out.println(item));

        // 方法引用实现Consumer（更简洁）
        list.forEach(System.out::println);
    }
}