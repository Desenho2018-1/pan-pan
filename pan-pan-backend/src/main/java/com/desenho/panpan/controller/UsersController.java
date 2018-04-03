package com.desenho.panpan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desenho.panpan.model.Users;
import com.desenho.panpan.repository.UserJpaRepository;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private UserJpaRepository userJpaRepository;

    @GetMapping(value = "/all")
    public List<Users> findAll() {
        return userJpaRepository.findAll();
    }

    @GetMapping(value = "/{name}")
    public Users findByName(@PathVariable final String name){
        return userJpaRepository.findByName(name);
    }

    @GetMapping(value = "/load")
    public String load() {
        Users user = new Users("Hugo", "Bambams", 100);
        userJpaRepository.save(user);
        return "asdf";
    }

    @PostMapping(value = "/add")
    public String add(@RequestBody final Users user){
      userJpaRepository.save(user);
      return "Done";
    }
}
