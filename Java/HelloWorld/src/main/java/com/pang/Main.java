package com.pang;

public class Main {
    public static void main(String[] args) {
        var employee = new Employee();
        employee.setBaseSalary(30_000);
        employee.setHourlyRate(20);
        int totalWage = employee.calculateSalary(10);
        System.out.println(totalWage);
    }
}