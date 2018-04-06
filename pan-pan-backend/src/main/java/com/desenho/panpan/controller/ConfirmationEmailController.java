package com.desenho.panpan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import com.desenho.panpan.model.VerificationToken;
import com.desenho.panpan.repository.UserJpaRepository;
import com.desenho.panpan.repository.VerificationTokenJpaRepository;


@RestController
@RequestMapping("/email")
public class ConfirmationEmailController{
    private static final String MESSAGE_SUBJECT = "[Pan Pan] Confirmação de cadastro";
    private static final String CONFIRMATION_MESSAGE = "Clique no link para completar seu registro!";
    private static final String SENDER_EMAIL = "no-reply@panpan.com";
    private static final String BASE_URL = "http://localhost:8080";
    private static final String CONFIRM_EMAIL_URL = "/email/confirm?token=";

    @Autowired
    private VerificationTokenJpaRepository verificationTokenJpaRepository;
    
    @Autowired
    private JavaMailSender emailSender;
    
    
    @GetMapping(value = "/send")
    public void sendConfirmationEmail(/**User user*/){
        SimpleMailMessage message = new SimpleMailMessage();
        
        String confirmationLink = createConfirmationLink(/**user*/);
        String messageBody = CONFIRMATION_MESSAGE + confirmationLink;
        //String receiverEmail = user.getEmail();
        String receiverEmail = "rodrigo.redcode@gmail.com";

        message.setSubject(MESSAGE_SUBJECT);
        message.setText(messageBody);
        message.setFrom(SENDER_EMAIL);
        message.setTo(receiverEmail);

        emailSender.send(message);
    }
    
    @GetMapping(value = "/confirm", params = "token")
    public String confirmRegister(@RequestParam String token) {
    	VerificationToken verificationToken = verificationTokenJpaRepository.findByToken(token);
    	
    	if(verificationToken != null){
    		if(!verificationToken.hasExpired()) {
    			//User user = verificationToken.getUser();
    			//user.setEnalbled(true)
    			//userJpaRepository.update(user)
    		}else {
    			return "Token has expired";
    		}
    	}else {
    		return "Invalid Token";
    	}
    	
    	return "Done";
    }

    public String createConfirmationLink(/**User user*/){
        VerificationToken verificationToken = new VerificationToken(/*user*/);
        verificationTokenJpaRepository.save(verificationToken);
        String confirmationLink = BASE_URL + CONFIRM_EMAIL_URL + verificationToken.getToken();
        return confirmationLink;
    }
}

/** 
 *  Atualizações de diagramas: Controler de email no diagrama de classes,
 *  model de verificationToken, adicionar etapa de email no diagrama de sequência
*/

// TO-DO: ver como salva o token relacionado com o usuário no banco
