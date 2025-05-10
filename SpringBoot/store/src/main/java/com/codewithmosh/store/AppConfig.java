package com.codewithmosh.store;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Scope;

@Configuration
public class AppConfig {

    @Value("$payment-gateway")
    private String paymentGateway;

    @Bean
    public PaymentService stripe() {
        return new StripePaymentService();
    }

    @Bean
    @Primary
    public PaymentService paypal() {
        return new PayPalPaymentService();
    }

    // @Bean
    // public OrderService orderService() {
    // if (paymentGateway.equals("stripe")) return new OrderService(stripe());
    // else return new OrderService(paypal());
    // }

    @Bean
    // @Scope("prototype")
    public OrderService orderService(PaymentService paymentService) {
        return new OrderService(paymentService);
    }
}
