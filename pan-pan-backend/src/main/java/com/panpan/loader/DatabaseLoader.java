package com.panpan.loader;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.panpan.model.*;
import com.panpan.repository.*;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final UserRepository repository;
	private final VerificationTokenRepository repository2;
	private final BandRepository repository3;	
	private final EmailNotificationRepository repository4;
	
	@Autowired
	public DatabaseLoader(UserRepository repository, VerificationTokenRepository repository2, BandRepository repository3, EmailNotificationRepository repository4) {
		this.repository = repository;
		this.repository2 = repository2;
		this.repository3 = repository3;
		this.repository4 = repository4;
	}

	@Override
	public void run(String... strings) throws Exception {
		User user1 = new User("Teste", "pablodiegoss@hotmail.com");
		this.repository.save(user1);
		this.repository2.save(new VerificationToken(user1));
		this.repository3.save(new Band("TestName", "TestGenre"));
		this.repository4.save(new EmailNotification(user1, "Bem Vindo demonio", "PanPan signup confirmation"));
	}
}
