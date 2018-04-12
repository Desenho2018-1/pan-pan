package com.desenho.panpan.controller;

import com.desenho.panpan.model.User;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


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
