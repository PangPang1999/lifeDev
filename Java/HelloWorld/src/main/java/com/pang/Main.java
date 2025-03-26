package com.pang;

import java.text.NumberFormat;
import java.util.Arrays;
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        // int randomVal = (int) Math.round(Math.random() * 100);
        int randomVal = (int) (Math.random() * 100);
        System.out.println(randomVal);
        String result = NumberFormat.getPercentInstance().format(0.99);
        System.out.println(result);
        // var calculator1 = new TaxCalculator2024(200_000);
        // var calculator2 = new TaxCalculator2025(200_000);
        //
        // // var taxReport = new TaxReport(calculator);
        // var taxReport = new TaxReport();
        // // taxReport.setCalculator(calculator1);
        // taxReport.show(calculator1);
        //
        // // taxReport.setCalculator(calculator2);
        // taxReport.show(calculator2);
    }
}


