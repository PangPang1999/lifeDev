package com.pang.lambdas;

import java.util.function.BinaryOperator;
import java.util.function.Function;

public class LambdasDemo {

    public static void show() {
        // 定义 BinaryOperator，用于加法
        BinaryOperator<Integer> add = (a, b) -> a + b;

        // 使用 apply 方法进行加法运算
        int result = add.apply(3, 4);
        System.out.println(result);  // 输出: 7

        // 定义 Function，用于平方
        Function<Integer, Integer> square = a -> a * a;

        // 组合操作：先加法后平方
        int result2 = add.andThen(square).apply(3, 4);
        System.out.println(result2);  // 输出: 49
    }
}
