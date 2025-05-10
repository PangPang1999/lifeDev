package com.codewithmosh.store;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("stripe")
@Primary
public class StripePaymentService implements PaymentService {
    @Value("${stripe.api-url}")
    private String apiUrl;

    @Value("${stripe.enabled}")
    private boolean enabled;

    @Value("${stripe.timeout:30}")
    private int timeout;

    @Value("#{'${stripe.supported-currencies}'.split(',')}")
    private List<String> supportedCurrencies;

    @Override
    public void processPayment(double amount) {
        System.out.println("API URL: " + apiUrl);
        System.out.println("Enabled: " + enabled);
        System.out.println("Timeout: " + timeout);
        System.out.println("Currencies: " + supportedCurrencies);
        System.out.println("STRIPE PAYMENT " + amount);
    }
}
