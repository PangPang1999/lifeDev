package com.pang;

import java.text.NumberFormat;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 输入整数
        System.out.print("请输入一个整数：");
        int x = scanner.nextInt();
        System.out.println("你输入的整数是：" + x);

        // 输入小数
        System.out.print("\n请输入一个小数：");
        double y = scanner.nextDouble();
        System.out.println("你输入的小数是：" + y);

        // 清除换行符
        scanner.nextLine();  // 处理 nextInt() / nextDouble() 后残留的换行符

        // 输入单个单词（不包括空格）
        System.out.print("\n请输入一个单词（遇到空格停止）：");
        String s = scanner.next();
        System.out.println("你输入的单词是：" + s);
        scanner.nextLine();  // 处理 next() 后的换行符

        // 输入整行字符串
        System.out.print("\n请输入一整行文本：");
        String s2 = scanner.nextLine();
        System.out.println("你输入的整行文本是：" + s2);

        // 输入整行文本（去除首尾空格）
        System.out.print("\n请输入一整行文本（自动去除前后空格）：");
        String s3 = scanner.nextLine().trim();
        System.out.println("去除空格后的文本是：" + s3);

        scanner.close(); // 关闭 Scanner
    }
}


