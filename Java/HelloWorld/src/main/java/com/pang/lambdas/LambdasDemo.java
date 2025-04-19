package com.pang.lambdas;

import java.util.function.Function;

public class LambdasDemo {

    public static void show() {
        // "key:value"
        // first: "key=value"
        // second: "{key=value}"
        Function<String, String> replaceColon = str -> str.replace(":","=");
        Function<String, String> addBraces = str -> "{" + str + "}";

        // andThen: 先replaceColon，再addBraces
        var result = replaceColon.andThen(addBraces).apply("key:value");
        // compose：在addBraces之前，先replaceColon
        var result2 = addBraces.compose(replaceColon).apply("key:value");

        System.out.println(result2);

        // 另外一种方式
        var compose = replaceColon.andThen(addBraces);
        System.out.println(compose.apply("key:value"));
    }
}
