package com.codewithmosh.store;

import com.codewithmosh.store.entities.User;
import com.codewithmosh.store.repositories.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class StoreApplication {
    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(StoreApplication.class, args);

        UserRepository userRepository = context.getBean(UserRepository.class);

        // 创建对象
        // var user = User.builder()
        //         .name("John")
        //         .email("john@example.com")
        //         .password("password")
        //         .build();
        // 将对象数据添加到表，无需手动写SQL
        // userRepository.save(user);

        // 根据ID查找数据
        // User user = userRepository.findById(1L).orElseThrow();
        // System.out.println(user.getName());

        // 查找所有数据并输出
        // userRepository.findAll().forEach(u -> System.out.println(u.getName()));

        // 根据ID删除数据
        // userRepository.deleteById(1L);
    }
}
