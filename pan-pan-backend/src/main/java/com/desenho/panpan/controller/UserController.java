package com.desenho.panpan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desenho.panpan.repository.UserRepository;
import com.desenho.panpan.model.User;

@RestController
@RequestMapping(value="/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(value = "/all")
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @GetMapping(value = "/{name}")
    public User findByFirstName(@PathVariable final String name){
        return userRepository.findByFirstName(name);
    }

    @PostMapping(value = "/signup")
    public String add(@RequestBody final User user){
      userRepository.save(user);
      return "Done\n";
    }
}
