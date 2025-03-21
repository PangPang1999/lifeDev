package com.pang;

public class Employee {
    private int baseSalary;
    private int hourlyRate;

    // 创建实例字段
    public static int numberOfEmployees;

    public Employee(int baseSalary) {
        this(baseSalary, 0);
    }

    public Employee(int baseSalary, int hourlyRate) {
        setBaseSalary(baseSalary);
        setHourlyRate(hourlyRate);
        numberOfEmployees++;
    }

    public static int getNumberOfEmployees() {
        // 在静态方法中，只能调用静态字段
        return numberOfEmployees;
    }

    public int calculateSalary(int extraHours) {
        return getBaseSalary() + (getHourlyRate() * extraHours);
    }

    public int calculateSalary() {
        return calculateSalary(0);// 可以在方法内调用其他方法
    }

    private void setBaseSalary(int baseSalary) {
        if (baseSalary <= 0)
            throw new IllegalArgumentException("Base Salary cannot be 0 or less.");
        this.baseSalary = baseSalary;
    }

    private int getBaseSalary() {
        return baseSalary;
    }

    private int getHourlyRate() {
        return hourlyRate;
    }

    private void setHourlyRate(int hourlyRate) {
        if (hourlyRate < 0)
            throw new IllegalArgumentException("Hourly Rate cannot be negative.");
        this.hourlyRate = hourlyRate;
    }
}