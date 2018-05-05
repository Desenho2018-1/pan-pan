package com.panpan.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.panpan.model.User;
import com.panpan.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginUserController{

    private final String baseURL = "${spring.data.rest.base-path}";
    @Autowired
    private UserRepository userRepository;

    @PostMapping(value = baseURL + "/users/login")
    public User login(@RequestBody JsonNode request) {
        System.out.println(request);
        String username = request.get("username").asText();
        String password = request.get("password").asText();

        User user = userRepository.findByUserNameAndPassword(username, password);
        user.setPassword("");

        return user;

    }
}

