package com.pang.generics;

import java.util.HashMap;
import java.util.Map;

public class MapDemo {
    public static void show() {
        var c1 = new Customer("a","e1");
        var c2 = new Customer("b","e2");

        Map<String,Customer> map = new HashMap<>();
        map.put(c1.getEmail(),c1);
        map.put(c2.getEmail(),c2);

        var customer = map.get("e1");//查询键为e1的值

        var unknow = new Customer("Unknown","");
        var customer2 = map.getOrDefault("e10",unknow);// 若查找不到返回默认值方法

        var ifContainE10 = map.containsKey("e10");// 查找是否存在

        var replace = map.replace("e1", new Customer("a++", "e1"));

        // for(var item: map) Map本身不可遍历，可以通过方法遍历键、值，或者键值对
        for(var item : map.keySet()){}// 遍历键
        for(var item : map.values()){}// 遍历值
        for(var item : map.entrySet()){}// 遍历键值对
    }
}
