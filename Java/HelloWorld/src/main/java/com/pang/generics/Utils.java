package com.pang.generics;

public class Utils {

    public static <T extends Comparable<T>> T max(T first, T second) {
        return (first.compareTo(second) > 0) ? first : second;
    }

    public static <K, V> void print(K key, V value) {
        System.out.println(key + ": " + value);
    }

    // 可以使用子类套入
    public static void printUser(User user) {
        System.out.println(user);
    }

    // 无法使用User的子类
    public static void printUsers(GenericList<? super User> users) {

        //extend 时
        // User x = users.get(0);//只允许读操作

        //super 时
        Object x = users.get(0);//读操作只允许返回Object
        users.add(new User(10));//允许写入操作
        users.add(new Instructor(10));//允许写入操作
    }
}
