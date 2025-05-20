package com.codewithmosh.store.repositories;

import com.codewithmosh.store.entities.Product;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface ProductRepository extends CrudRepository<Product, Long> {

    // SQL 示例
    @Query(value = "select * from products p where  p.price between :min and :max by p.name", nativeQuery = true)
    List<Product> findByPriceSQL(@Param("min") BigDecimal min, @Param("max") BigDecimal max);

    // JPQL示例
    @Query("select p from Product p join p.category where p.price between :min and :max order by p.name")
    List<Product> findByPrice(@Param("min") BigDecimal min, @Param("max") BigDecimal max);

    // 更新示例
    @Modifying
    @Query("update Product p set p.price = :newPrice where p.category.id = :categoryId")
    void updatePriceByCategory(@Param("newPrice") BigDecimal newPrice, @Param("categoryId") Long categoryId);
}