package com.panpan.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.panpan.repository.UserRepository;
import com.panpan.model.User;
import com.panpan.controller.ConfirmationEmailController;
import com.panpan.exception.InvalidRequestException;

@RestController
@RequestMapping(value = "api/users")
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ConfirmationEmailController confirmationEmailController;

	@PostMapping(value = "/signup")
	public String add(@RequestBody @Valid final User user, BindingResult bindingResult) {
		if (!bindingResult.hasErrors()) {
			userRepository.save(user);
			confirmationEmailController.sendConfirmationEmail(user);
			return "Done\n";
		} else {
			throw new InvalidRequestException("Invalid user", bindingResult);
		}
	}
}
