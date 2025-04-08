package com.pang;

import com.pang.generics.*;

public class Main {
    public static void main(String[] args) {
        var instructors = new GenericList<Instructor>();
        var users = new GenericList<User>();

        Utils.printUsers(users);
        // Utils.printUsers(instructors); // 报错
    }
}