package com.codewithmosh.store.repositories;

import com.codewithmosh.store.dtos.UserSample;
import com.codewithmosh.store.entities.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {
    @EntityGraph(attributePaths = {"tags", "addresses"})
    Optional<User> findByEmail(String email);


    @Query("SELECT u.id AS id, u.name AS name FROM User u")
    List<UserSample> findAllProjected();

    @Query("select u from User u left join fetch u.profile left join fetch u.addresses")
    List<User> findAllWithJoin();
}
