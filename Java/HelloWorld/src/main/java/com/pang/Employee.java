package com.pang;

public class Employee {
    int baseSalary = 30_000;
    int hourlyRate = 20;

    public int calculateSalary(int extraHours) {
        return baseSalary + (hourlyRate * extraHours);
    }
}
