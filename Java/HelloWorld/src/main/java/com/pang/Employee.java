package com.pang;

public class Employee {
    private int baseSalary;
    private int hourlyRate;

    public int calculateSalary(int extraHours) {
        return getBaseSalary() + (getHourlyRate() * extraHours);
    }

    public void setBaseSalary(int baseSalary) {
        if (baseSalary <= 0)
            throw new IllegalArgumentException("Base Salary cannot be 0 or less.");
        this.baseSalary = baseSalary;
    }

    public int getBaseSalary() {
        return baseSalary;
    }

    public int getHourlyRate() {
        if (hourlyRate <= 0)
            throw new IllegalArgumentException("HourlyRate cannot be 0 or less.");
        return hourlyRate;
    }

    public void setHourlyRate(int hourlyRate) {
        this.hourlyRate = hourlyRate;
    }
}
