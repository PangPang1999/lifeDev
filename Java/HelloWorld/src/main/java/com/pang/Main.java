package com.pang;

public class Main {
    public static void main(String[] args) {
        var calculator1 = new TaxCalculator2024(200_000);
        var calculator2 = new TaxCalculator2025(200_000);

        // var taxReport = new TaxReport(calculator);
        var taxReport = new TaxReport();
        // taxReport.setCalculator(calculator1);
        taxReport.show(calculator1);

        // taxReport.setCalculator(calculator2);
        taxReport.show(calculator2);
    }
}


