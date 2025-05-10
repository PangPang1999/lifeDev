package com.codewithmosh.store;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class StoreApplication {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(StoreApplication.class, args);
        UserService userService = context.getBean(UserService.class);

        User user = new User(1L, "alice@example.com", "123456", "Alice");
        userService.registerUser(user); // 正常注册
        userService.registerUser(user); // 触发重复注册异常
    }
}
