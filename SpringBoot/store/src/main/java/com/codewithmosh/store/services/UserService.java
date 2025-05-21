package com.codewithmosh.store.services;

import com.codewithmosh.store.entities.*;
import com.codewithmosh.store.repositories.*;
import com.codewithmosh.store.repositories.specifications.ProductSpec;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

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
        var probe = new Product();
        probe.setName("product");

        var matcher = ExampleMatcher.matching()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);
        var example = Example.of(probe, matcher);
        List<Product> all = productRepository.findAll(example);
        all.forEach(p -> {
            System.out.println(p);
        });
    }


    public void fetchProductsByCriteria() {
        var products = productRepository.findProductsByCriteria(null, BigDecimal.valueOf(1), BigDecimal.valueOf(20));
        System.out.println(products);
    }

    public void fetchProductsBySpecifications(String name, BigDecimal min, BigDecimal max) {
        Specification<Product> spec = Specification.where(null);
        if (name != null) {
            spec = spec.and(ProductSpec.hasName(name));
        }
        if (max != null) {
            spec = spec.and(ProductSpec.hasPriceGreaterThanOrEqualTo(max));
        }
        if (min != null) {
            spec = spec.and(ProductSpec.hasPriceLessThanOrEqualTo(min));
        }

        productRepository.findAll(spec).forEach(p -> {
            System.out.println(p);
        });
    }


    @Transactional
    public void printLoyaltyProfiles() {
        var profiles = profileRepository.findByLoyalProfiles(2);
        profiles.forEach(p -> System.out.println(p.getId() + ": " + p.getEmail()));
    }

    public void fetchSortedProducts() {
        // 示例1: 按单个属性 "name" 升序排序
        Sort sortByNameAsc = Sort.by("name"); // 默认升序
        List<Product> productsSortedByName = productRepository.findAll(sortByNameAsc);

        // 示例2: 按单个属性 "price" 降序排序
        Sort sortByPriceDesc1 = Sort.by(Sort.Direction.DESC, "price");
        Sort sortByPriceDesc2 = Sort.by("price").descending();
        List<Product> productsSortedByPrice = productRepository.findAll(sortByPriceDesc1);

        // 示例3: 组合排序 - 先按 "price" 升序，再按 "name" 降序
        Sort sortByCategoryThenPrice = Sort.by("price").ascending()
                .and(Sort.by("name").descending());
        List<Product> productsSortedCombined = productRepository.findAll(sortByCategoryThenPrice);


        Sort sort = Sort.by("name").and(
                Sort.by("price").descending()
        );
        productRepository.findAll(sort).forEach(p -> {
            System.out.println(p);
        });
    }

    public void fetchPaginatedProducts(int pageNumber, int size) {
        Pageable firstPageWithFiveElements = PageRequest.of(pageNumber, size);
        Page<Product> productPage = productRepository.findAll(firstPageWithFiveElements);

        List<Product> productsOnFirstPage = productPage.getContent(); // 获取当前页的 Product 列表
        int totalPages = productPage.getTotalPages();                 // 获取总页数
        long totalElements = productPage.getTotalElements();         // 获取总记录数
        int currentPageNumber = productPage.getNumber();              // 获取当前页码 (0-indexed)
        int currentPageSize = productPage.getSize();                  // 获取当前页大小

        System.out.println("当前页码: " + currentPageNumber);
        System.out.println("每页记录数: " + currentPageSize);
        System.out.println("总页数: " + totalPages);
        System.out.println("总记录数: " + totalElements);
        productsOnFirstPage.forEach(System.out::println);
    }


}
