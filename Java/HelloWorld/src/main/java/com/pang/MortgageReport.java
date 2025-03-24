package com.pang;

import java.text.NumberFormat;

public class MortgageReport {

    private final NumberFormat currencyInstance;
    private  MortgageCalculate mortgageCalculate;

    public MortgageReport(MortgageCalculate mortgageCalculate) {
        this.mortgageCalculate = mortgageCalculate;
        currencyInstance = NumberFormat.getCurrencyInstance();
    }

    public void printMortgage() {
        double monthlyMortgage = mortgageCalculate.caculateMortgage();

        String monthlyMortgageFormatted = currencyInstance.format(monthlyMortgage);
        System.out.println("\nMortgage");
        System.out.println("---------");
        System.out.println("Monthly Payment: " + monthlyMortgageFormatted);
    }

    public void printPaymentsSchedule() {
        System.out.println("\nPayment Schedule");
        System.out.println("----------------");
        for(double balance : mortgageCalculate.getRemainingBanlance())
            System.out.println(currencyInstance.format(balance));
    }
}
