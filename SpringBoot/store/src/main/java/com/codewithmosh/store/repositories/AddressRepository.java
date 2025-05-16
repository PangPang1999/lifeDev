package com.codewithmosh.store.repositories;

import com.codewithmosh.store.entities.Address;
import org.springframework.data.repository.CrudRepository;

public interface AddressRepository extends CrudRepository<Address, Long> {
}