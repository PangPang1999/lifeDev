package com.pang;


public class Main {
    public static void main(String[] args) {
        var employee1 = new Employee(20_000);
        var employee2 = new Employee(30_000);
        var employee3 = new Employee(50_000);
        // 通过类名访问静态字段
        System.out.println(Employee.numberOfEmployees);// 输出 3

        var employee4 = new Employee(20_000);
        var employee5 = new Employee(30_000);
        var employee6 = new Employee(50_000);
        // 通过类名访问静态方法
        System.out.println(employee6.getNumberOfEmployees());// 输出6

        // 通过对象调用实例方法
    }
}