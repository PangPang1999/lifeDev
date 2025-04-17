package com.pang.generics;

import java.util.*;

public class SetDemo {
    public static void show(){
        Set<String> set = new HashSet<>();
        set.add("x");
        set.add("y");
        set.add("z");
        set.add("z");
        System.out.println(set);

        Collection<String> collection = new ArrayList<>();
        Collections.addAll(collection, "a", "b", "c");
        Set<String> set1 = new HashSet<>(collection);
        System.out.println(set1);

        Set<String> set2 = new HashSet<>(Arrays.asList("b", "c", "d"));
        System.out.println(set2);

        // Union
        // set1.addAll(set2);

        // Intersection
        // set1.retainAll(set2);

        // Difference
        set1.removeAll(set2);

        System.out.println(set1);
    }
}
