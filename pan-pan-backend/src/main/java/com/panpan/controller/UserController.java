package com.panpan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.panpan.model.User;
import com.panpan.repository.UserRepository;


import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserRepository userRepository;

    @CrossOrigin(origins = "http://localhost:3000")
	@GetMapping(value = "/{name}")
	public User findNameUser(@PathVariable String name) {
    	return userRepository.findByFirstName(name);
	}
 }
