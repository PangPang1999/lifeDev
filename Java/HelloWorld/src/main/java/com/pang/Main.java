package com.pang;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int principal = (int) Console.readNumber("Principal: ", 1000, 1_000_000);
        float annualInterestRate = (float) Console.readNumber("Annual Interest Rate: ", 1, 30);
        byte periodYear = (byte) Console.readNumber("Period Year: ", 1, 30);

        var mortgageCalculate = new MortgageCalculate(principal, annualInterestRate, periodYear);
        var mortgageReport = new MortgageReport(mortgageCalculate);

        mortgageReport.printMortgage();
        mortgageReport.printPaymentsSchedule();
    }

}