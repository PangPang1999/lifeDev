package com.pang;

public class MortgageCalculate {

    private final static byte MONTHS_IN_YEAR = 12;
    private final static byte PERCENTAGE = 100;
    private int principal;
    private float annualInterestRate;
    private byte periodYear;

    public MortgageCalculate(int principal, float annualInterestRate, byte periodYear) {
        this.principal = principal;
        this.annualInterestRate = annualInterestRate;
        this.periodYear = periodYear;
    }

    public  double caculateMortgage() {

        float monthlyInterestRate = getMonthlyInterestRate();
        int periodMonth = getPeriodMonth();

        double monthlyMortgage = principal
                - monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periodMonth)
                / (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

        return monthlyMortgage;
    }

    public  double caculateBalance(
            short paymentsMade) {

        float monthlyInterestRate = getMonthlyInterestRate();
        int periodMonth = getPeriodMonth();

        double banlance = principal *
                (Math.pow((1 + monthlyInterestRate), periodMonth)
                        - Math.pow(1 + monthlyInterestRate, paymentsMade))
                / (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

        return banlance;
    }

    public double[] getRemainingBanlance() {
        var balances = new double[getPeriodMonth()];
        for (short month = 1; month <= balances.length * MortgageCalculate.MONTHS_IN_YEAR; month++) {
            balances[month - 1] = caculateBalance(month);
        }
        return balances;
    }

    private int getPeriodMonth() {
        int periodMonth = periodYear * MONTHS_IN_YEAR;
        return periodMonth;
    }

    private float getMonthlyInterestRate() {
        float monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR / PERCENTAGE;
        return monthlyInterestRate;
    }
}
