package com.codewithmosh.store;

import com.codewithmosh.store.entities.Address;
import com.codewithmosh.store.entities.Profile;
import com.codewithmosh.store.entities.Tag;
import com.codewithmosh.store.entities.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class StoreApplication {

    public static void main(String[] args) {
        var user = User.builder()
                .name("Alice")
                .email("alice@example.com")
                .password("password")
                .build();

        var profile = Profile.builder()
                .bio("Senior Developer")
                .build();

        user.addProfile(profile); // 建立双向关系绑定
        System.out.println(user);
    }
}
