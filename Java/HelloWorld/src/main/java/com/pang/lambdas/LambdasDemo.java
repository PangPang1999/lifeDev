package com.pang.lambdas;

import java.util.List;
import java.util.function.Consumer;
import java.util.function.Supplier;

public class LambdasDemo {

    public static void show() {

        // 使用匿名类实现 Supplier 接口的 get 方法，使用Math类的random方法
        Supplier<Double> supplier = new Supplier<Double>() {
            @Override
            public Double get() {
                return Math.random();
            }
        };

        // 将 Math 类的 random 方法绑定到接口引用 s 的get方法上
        // 只有当s调用get方法时，xxxxx，xxx懒加载
        Supplier<Double> s = Math::random;

        System.out.println(s.get());
    }
}
