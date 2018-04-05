package com.desenho.panpan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;


@RestController
@RequestMapping("/email")
public class ConfirmationEmailController{
    private final String MESSAGE_SUBJECT = "[Pan Pan] Confirmação de cadastro";
    private final String CONFIRMATION_MESSAGE = "Clique no link para completar seu registro!";
    private final String SENDER_EMAIL = "no-reply@panpan.com";

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

    public String createConfirmationLink(/**User user*/){
        String verificationToken = generateVerificationToken();
        String confirmationLink = "teste" + verificationToken;
        return confirmationLink;
    }

    public String generateVerificationToken(){
        String token = UUID.randomUUID().toString();
        return token;
    }

}

/** 
 *  Atualizações de diagramas: Controler de email no diagrama de classes,
 *  model de verificationToken, adicionar etapa de email no diagrama de sequência
*/

// TO-DO: ver como salva o token relacionado com o usuário no banco
