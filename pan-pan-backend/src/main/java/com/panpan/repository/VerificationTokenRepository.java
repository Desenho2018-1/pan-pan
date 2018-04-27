package com.panpan.repository;

import com.panpan.model.VerificationToken;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;


@Component
public interface VerificationTokenRepository extends CrudRepository<VerificationToken, Long>{

	VerificationToken findByToken(String token);

}
