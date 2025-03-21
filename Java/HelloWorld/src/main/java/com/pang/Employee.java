package com.pang;

public class Employee {
    private int baseSalary;
    private int hourlyRate;

    // 构造函数：只初始化基本工资
    public Employee(int baseSalary) {
        // 调用另一构造函数，复用初始化逻辑；默认时薪设为 0
        this(baseSalary, 0);// 复用
    }

    // 构造函数：初始化基本工资和时薪
    public Employee(int baseSalary, int hourlyRate) {
        setBaseSalary(baseSalary);
        setHourlyRate(hourlyRate);
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
        if (hourlyRate <= 0)
            throw new IllegalArgumentException("Hourly Rate cannot be negative.");
        this.hourlyRate = hourlyRate;
    }
}