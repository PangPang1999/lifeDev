package com.codewithmosh.store.services;

import com.codewithmosh.store.entities.User;
import com.codewithmosh.store.repositories.UserRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;
    private final EntityManager entityManager;

    @Transactional
    public void showEntityStates() {
        var user = User.builder()
                .name("John")
                .email("john@example.com")
                .password("password")
                .build();

        // 初始状态：瞬时态
        System.out.println(entityManager.contains(user) ? "持久态" : "瞬时/游离态");
        // 保存，进入持久化上下文
        userRepository.save(user);
        // 保存后状态
        System.out.println(entityManager.contains(user) ? "持久态" : "瞬时/游离态");
    }
}
