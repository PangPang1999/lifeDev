package com.codewithmosh.store.mappers;

import com.codewithmosh.store.dtos.OrderDto;
import com.codewithmosh.store.entities.Order;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    OrderDto toDto(Order order);
}