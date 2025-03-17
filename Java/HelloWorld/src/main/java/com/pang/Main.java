package com.pang;

import java.awt.*;
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        String message = "  Hello World!";

        // 拼接字符串
        String result = message + " Welcome!";

        // 检查是否以感叹号结尾
        boolean endsWithExclamation = message.endsWith("!");

        // 获取字符串长度
        int len = message.length();

        // 查找字符 'o' 的位置
        int index = message.indexOf("o");

        // 替换感叹号为星号
        String replaced = message.replace("!", "*");

        // 转换为小写
        String lower = message.toLowerCase();

        // 去除首尾空格（假设 message 包含多余空白）
        String trimmed = message.trim();

        System.out.println(result);              // 输出 result
        System.out.println(endsWithExclamation); // 输出 true
        System.out.println(len);                 // 输出字符总数
        System.out.println(index);               // 输出 'o' 的索引
        System.out.println(replaced);            // 输出替换后的字符串
        System.out.println(lower);               // 输出全小写字符串
        System.out.println(trimmed);             // 输出去除前后空白的字符串
        System.out.println(message + "<- origin");
    }
}