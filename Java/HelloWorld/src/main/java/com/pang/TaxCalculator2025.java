package com.pang;

public class TaxCalculator2025 implements TaxCalculator {

    private double taxableIncome;
    private double exemptTax = 60000;

    public TaxCalculator2025(double taxableIncome) {
        this.taxableIncome = taxableIncome - exemptTax;
    }

    @Override
    public double calculateTax() {
        return taxableIncome * 0.3;
    }
}
