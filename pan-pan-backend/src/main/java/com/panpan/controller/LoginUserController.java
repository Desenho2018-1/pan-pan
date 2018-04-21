package com.panpan.controller;

import com.panpan.model.User;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping(value="/login")
@SessionAttributes("user")
public class LoginUserController{

    @ModelAttribute("user")
    public User setUserOnSession(){
        return new User();
    }

    @PostMapping(value = "/login")
    public User Login(@ModelAttribute("user")  User userForSession,
                      @RequestBody User user) {

        userForSession.setEmail(user.getEmail());
        userForSession.setPassword(user.getPassword());
        return user;

    }
}
