package com.pang.lambdas;

import java.util.function.BinaryOperator;
import java.util.function.Function;

public class LambdasDemo {
    public static void show() {

        // 匿名内部类使用
        greet(new Printer() {
            @Override
            public void print(String message) {
                System.out.println(message);
            }
        });

        // Lambda 表达式基本使用，仅适用于函数式接口（仅有一个抽象方法的类）
        // greet()括号内视为Pointer接口引用
        greet((String message) -> {
            System.out.println(message);
        });

        // 单个参数时可省略括号，单条语句可省略花括号
        greet(message -> System.out.println(message));

        // 接收引用，该引用的唯一抽象方法已被实现，即打印
        Printer printer = message -> System.out.println(message);

        // 传入引用
        greet(printer);
    }

    public static void greet(Printer printer) {
        printer.print("Hello World");
    }
}