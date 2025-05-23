package com.codewithmosh.store.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
public class UserDto {
    // 设置JSON不包含用户id
    @JsonIgnore
    private Long id;

    // 设置JSON中name改为user_name
    @JsonProperty("user_name")
    private String name;

    private String email;

    // 设置JSON中phoneNumber为空时不包含
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String phoneNumber;

    // 设置时间转换为标准格式
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdAt;
}
