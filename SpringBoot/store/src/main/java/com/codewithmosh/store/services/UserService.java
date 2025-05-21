package com.codewithmosh.store.services;

import com.codewithmosh.store.entities.*;
import com.codewithmosh.store.repositories.*;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;
    private final ProfileRepository profileRepository;
    private final EntityManager entityManager;
    private final AddressRepository addressRepository;
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

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

    @Transactional
    public void showRelatedEntities() {
        Profile profile = profileRepository.findById(2L).get();
        System.out.println(profile.getBio());
        // System.out.println(profile.getUser().getEmail());
    }

    public void fetchAddress() {
        var address = addressRepository.findById(2L).get();
    }

    public void persistRelated() {
        var user = User.builder()
                .name("Nancy")
                .email("nancy@example.com")
                .password("password")
                .build();
        var address = Address.builder()
                .street("street")
                .city("city")
                .state("state")
                .zip("zip")
                .build();
        user.addAddress(address);
        userRepository.save(user);
        // addressRepository.save(address);
    }

    @Transactional
    public void deleteRelated() {
        User user = userRepository.findById(8L).orElseThrow();
        var address = user.getAddresses().get(0);
        user.removeAddress(address);
        userRepository.save(user);
    }

    @Transactional
    public void manageProducts() {
        productRepository.deleteById(4L);
    }

    @Transactional
    public void fetchProducts() {
        var category = Category.builder().id(1L).build();
        productRepository.findAllByCategory(category);
    }

    @Transactional
    public void fetchUsers() {
        var users = userRepository.findAllWithJoin();
        users.forEach(
                user -> {
                    // System.out.println(user.getName());
                    System.out.println(user.getAddresses());
                }
        );
    }
}
