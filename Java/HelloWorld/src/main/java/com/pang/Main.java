package com.pang;

import java.text.NumberFormat;
import java.util.Scanner;

public class Main {
    final static byte MONTHS_IN_YEAR = 12;
    final static byte PERCENTAGE = 100;

    public static void main(String[] args) {

        int principal = 0;
        float annualInterestRate = 0;
        byte periodYear = 0;

        Scanner scanner = new Scanner(System.in);

        principal = (int) readNumber("Principal: ", 1000, 1_000_000);
        annualInterestRate = (float) readNumber("Annual Interest Rate: ", 1, 30);
        periodYear = (byte) readNumber("Period Year: ", 1, 30);

        printMortgage(principal, annualInterestRate, periodYear);
        printPaymentsSchedule(periodYear, principal, annualInterestRate);
    }

    private static void printMortgage(int principal, float annualInterestRate, byte periodYear) {
        double monthlyMortgage = caculateMortgage(principal, annualInterestRate, periodYear);

        String monthlyMortgageFormatted = NumberFormat.getCurrencyInstance().format(monthlyMortgage);
        System.out.println("\nMortgage");
        System.out.println("---------");
        System.out.println("Monthly Payment: " + monthlyMortgageFormatted);
    }

    private static void printPaymentsSchedule(byte periodYear, int principal, float annualInterestRate) {
        System.out.println("\nPayment Schedule");
        System.out.println("----------------");
        for (short month = 1; month <= periodYear * MONTHS_IN_YEAR; month++) {
            double balance = caculateBalance(principal, annualInterestRate, periodYear, month);
            System.out.println(NumberFormat.getCurrencyInstance().format(balance));

        }
    }

    public static double readNumber(String prompt, double min, double max) {
        Scanner scanner = new Scanner(System.in);
        double value;
        while (true) {
            System.out.print(prompt);
            value = scanner.nextFloat();
            if (value >= min && value <= max) break;
            System.out.print("Enter a value between " + min + " and " + max);
        }
        return value;
    }

    public static double caculateMortgage(
            int principal,
            float annualInterestRate,
            byte periodYear) {

        float monthlyInterestRate = 0;
        int periodMonth = 0;

        monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR / PERCENTAGE;
        periodMonth = periodYear * MONTHS_IN_YEAR;

        double monthlyMortgage = principal
                * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periodMonth)
                / (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

        return monthlyMortgage;
    }

    public static double caculateBalance(
            int principal,
            float annualInterestRate,
            byte periodYear,
            short paymentsMade) {


        float monthlyInterestRate = 0;
        int periodMonth = 0;

        monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR / PERCENTAGE;
        periodMonth = periodYear * MONTHS_IN_YEAR;

        double banlance = principal *
                (Math.pow((1 + monthlyInterestRate), periodMonth)
                        - Math.pow(1 + monthlyInterestRate, paymentsMade))
                / (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

        return banlance;
    }
}


