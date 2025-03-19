package com.pang;

import java.text.NumberFormat;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        final byte MONTHS_IN_YEAR = 12;
        final byte PERCENTAGE = 100;

        int principal = 0;
        float monthlyInterestRate = 0;
        int periodMonth = 0;

        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Principal: ");
            principal = scanner.nextInt();// 数额
            if (principal >= 1000 || principal <= 1_000_000) {
                break;
            }
            System.out.print("Enter a value between 1000 and 1_000_000");
        }
        while (true) {
            System.out.print("Annual Interest Rate:");
            float annualInterestRate = scanner.nextFloat() / PERCENTAGE;// 利率
            if (annualInterestRate >= 0 && annualInterestRate <= 30) {
                monthlyInterestRate = annualInterestRate / MONTHS_IN_YEAR;
                break;
            }
            System.out.print("Enter a value between 1 and 30");

        }

        while (true) {
            System.out.print("Period(Years):");
            byte periodYear = scanner.nextByte();// 分期年数
            if (periodYear >= 0 && periodYear <= 30) {
                periodMonth = periodYear * MONTHS_IN_YEAR;
                break;
            }
            System.out.print("Enter a value between 1 and 30");
        }

        double monthlyMortgage = principal
                * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periodMonth)
                / (Math.pow(1 + monthlyInterestRate, periodMonth) - 1);

        String monthlyMortgageFormatted = NumberFormat.getCurrencyInstance().format(monthlyMortgage);

        System.out.println("Monthly mortgage: " + monthlyMortgageFormatted);
    }
}


