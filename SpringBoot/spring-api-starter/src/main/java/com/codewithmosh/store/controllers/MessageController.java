package com.codewithmosh.store.controllers;

import com.codewithmosh.store.entities.Message;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {
    @RequestMapping("/hello")
    public Message sayHello() {
        return new Message("hello world");
    }
}
