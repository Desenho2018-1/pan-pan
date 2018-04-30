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
	private final NotificationRepository repository4;
	
	@Autowired
	public DatabaseLoader(UserRepository repository, VerificationTokenRepository repository2, BandRepository repository3, NotificationRepository repository4) {
		this.repository = repository;
		this.repository2 = repository2;
		this.repository3 = repository3;
		this.repository4 = repository4;
	}

	@Override
	public void run(String... strings) throws Exception {
		User user1 = new User("Teste", "pablodiegoss@hotmail.com");
		Band band1 = new Band(user1,"TestName", "TestGenre");
		Notification n1 = new Notification(band1,user1, "A", "B");
		n1.setOwner(user1);
		this.repository.save(user1);
		//this.repository3.save(band1);
		//this.repository2.save(new VerificationToken(user1));
		//this.repository4.save(n1);
	}
}
