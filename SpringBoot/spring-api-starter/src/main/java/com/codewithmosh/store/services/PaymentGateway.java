package com.codewithmosh.store.services;

import com.codewithmosh.store.entities.Order;

public interface PaymentGateway {
    CheckoutSession createCheckoutSession(Order order);
}
