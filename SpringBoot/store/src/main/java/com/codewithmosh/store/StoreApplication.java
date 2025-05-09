package com.codewithmosh.store;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class StoreApplication {

    public static void main(String[] args) {
        // 获取 IoC 容器对象
        ApplicationContext context = SpringApplication.run(StoreApplication.class, args);
        // 通过容器获取 Bean 实例
        // 目前还没有往容器中加入bean，所以找不到报错
        OrderService orderService = context.getBean(OrderService.class);
        orderService.setPaymentService(new PayPalPaymentService());
        orderService.placeOrder();
    }
}
