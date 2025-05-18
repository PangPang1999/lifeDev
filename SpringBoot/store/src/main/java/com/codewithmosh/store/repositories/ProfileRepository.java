package com.codewithmosh.store.repositories;

import com.codewithmosh.store.entities.Profile;
import org.springframework.data.repository.CrudRepository;

public interface ProfileRepository extends CrudRepository<Profile, Long> {
}