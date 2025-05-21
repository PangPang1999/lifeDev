package com.codewithmosh.store.repositories;

import com.codewithmosh.store.dtos.ProductSummary;
import com.codewithmosh.store.dtos.ProductSummaryDTO;
import com.codewithmosh.store.entities.Category;
import com.codewithmosh.store.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    // 普通查询（全列查询）
    // List<Product> findAllByCategory(Category category);

    // 接口投影 + 普通衍生查询
    // List<ProductSummary> findAllByCategory(Category category);

    // 类投影 + 普通衍生查询
    // List<ProductSummaryDTO> findAllByCategory(Category category);

    // 接口投影 + @Query 查询，需要修改 select
    // @Query("select p.id as id, p.name as name from Product p where p.category = ?1")
    // List<ProductSummary> findAllByCategory(Category category);

    // 类投影 + @Query 查询，需要使用全类名，非必要不推荐
    @Query("select new com.codewithmosh.store.dtos.ProductSummaryDTO(p.id, p.name ) from Product p where p.category = ?1")
    List<ProductSummaryDTO> findAllByCategory(Category category);

    @Procedure("findProductsByPrice")
    List<Product> findProducts(BigDecimal min, BigDecimal max);

    // @Query("select p from Product p join p.category where p.price between :min and :max order by p.name")
    // List<Product> findProducts(@Param("min") BigDecimal min, @Param("max") BigDecimal max);
}