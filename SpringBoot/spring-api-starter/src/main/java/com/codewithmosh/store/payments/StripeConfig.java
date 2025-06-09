package com.codewithmosh.store.payments;

import com.stripe.Stripe;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StripeConfig {
    @Value("${stripe.secretKey}")
    private String secretKey;

    @PostConstruct // 表示在 Spring 完成依赖注入后自动执行该方法。
    public void init() {
        Stripe.apiKey = secretKey; // Stripe Java SDK 中设定全局 API 密钥的标准方式。
    }
}