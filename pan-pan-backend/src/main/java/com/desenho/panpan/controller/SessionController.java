package com.desenho.panpan.controller;

import com.desenho.panpan.model.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/login")
public class SessionController {


    @GetMapping(value= "/info")
    public String userInfo(@SessionAttribute("user")User user) {

        System.out.println("o email é ess" + user.getEmail());
        return user.getEmail();

    }
}
