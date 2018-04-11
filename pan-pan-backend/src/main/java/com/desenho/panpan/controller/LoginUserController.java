package com.desenho.panpan.controller;

import com.desenho.panpan.model.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping(value="/user")
public class LoginUserController{

    @PostMapping(value = "/login")
    public User Login(@RequestBody final User user) {
        return user;
    }
}
