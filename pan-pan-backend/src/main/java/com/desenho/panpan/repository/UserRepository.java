package com.desenho.panpan.repository;

import com.desenho.panpan.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface UserRepository extends JpaRepository<User, Long> {

    User findByFirstName(String firstName);
}
