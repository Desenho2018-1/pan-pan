package com.desenho.panpan.controller;

import java.util.List;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desenho.panpan.repository.UserRepository;
import com.desenho.panpan.model.User;
import com.desenho.panpan.controller.ConfirmationEmailController;
import com.desenho.panpan.exception.InvalidRequestException;

@RestController
@RequestMapping(value="/user")
public class UserController {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ConfirmationEmailController confirmationEmailController;

    @GetMapping(value = "/all")
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @GetMapping(value = "/{name}")
    public User findByFirstName(@PathVariable final String name){
        return userRepository.findByFirstName(name);
    }

    @PostMapping(value = "/signup")
    public String add(@RequestBody @Valid final User user, BindingResult bindingResult){
      if (!bindingResult.hasErrors()){
        userRepository.save(user);
        confirmationEmailController.sendConfirmationEmail(user);
        return "Done\n";
      }else{
        throw new InvalidRequestException("Invalid user", bindingResult);
      }

    }
}
