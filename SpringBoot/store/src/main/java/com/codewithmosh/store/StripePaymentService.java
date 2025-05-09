package com.codewithmosh.store;

public class StripePaymentService implements PaymentService {
    
    @Override
    public void processPayment(double amount) {
        System.out.println("STRIPE PAYMENT " + amount);
    }
}
