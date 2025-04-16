package com.pang;

import com.pang.generics.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Customer> customers = new ArrayList<>();
        customers.add(new Customer("Alice", "cc@example.com"));
        customers.add(new Customer("Bob", "bb@example.com"));
        customers.add(new Customer("Charlie", "aa@example.com"));
        Collections.sort(customers, new EmailComparator());
        System.out.println(customers);

    }
}