package com.panpan.handler;

import com.panpan.model.User;
import com.panpan.controller.ConfirmationEmailController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.*;
import org.springframework.stereotype.Component;

@Component
@RepositoryEventHandler(User.class)
public class UserEventHandler {

	@Autowired
	private ConfirmationEmailController confirmationEmailController;

	@HandleAfterCreate
	public void handleUserSave(User user){
		confirmationEmailController.sendConfirmationEmail(user);
	}
}
