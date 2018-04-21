package com.panpan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import com.panpan.model.User;
import com.panpan.model.VerificationToken;
import com.panpan.repository.UserRepository;
import com.panpan.repository.VerificationTokenRepository;


@RestController
@RequestMapping("/email")
public class ConfirmationEmailController{
    private static final String MESSAGE_SUBJECT = "[Pan Pan] Confirmação de cadastro";
    private static final String CONFIRMATION_MESSAGE = "Clique no link para completar seu registro!";
    private static final String SENDER_EMAIL = "no-reply@panpan.com";
    private static final String BASE_URL = "http://localhost:8080";
    private static final String CONFIRM_EMAIL_URL = "/email/confirm?token=";

    @Autowired
    private VerificationTokenRepository verificationTokenRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JavaMailSender emailSender;

    @GetMapping(value = "/confirm", params = "token")
    public String confirmRegister(@RequestParam String token) {
    	VerificationToken verificationToken = verificationTokenRepository.findByToken(token);

    	if(verificationToken != null){
    		if(!verificationToken.hasExpired()) {
    			User user = verificationToken.getUser();
    			user.setActive(true);
    			userRepository.save(user);
    		}else {
    			return "Token has expired";
    		}
    	}else {
    		return "Invalid Token";
    	}

    	return "Done";
    }

    public void sendConfirmationEmail(User user){
    	SimpleMailMessage message = new SimpleMailMessage();

    	String confirmationLink = createConfirmationLink(user);
    	String messageBody = CONFIRMATION_MESSAGE + confirmationLink;
    	String receiverEmail = user.getEmail();

    	message.setSubject(MESSAGE_SUBJECT);
    	message.setText(messageBody);
    	message.setFrom(SENDER_EMAIL);
    	message.setTo(receiverEmail);

    	emailSender.send(message);
    }

    public String createConfirmationLink(User user){
        VerificationToken verificationToken = new VerificationToken(user);
        verificationTokenRepository.save(verificationToken);
        String confirmationLink = BASE_URL + CONFIRM_EMAIL_URL + verificationToken.getToken();
        return confirmationLink;
    }
}
