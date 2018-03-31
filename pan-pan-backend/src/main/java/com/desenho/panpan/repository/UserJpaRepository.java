package com.desenho.panpan.repository;

import com.desenho.panpan.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface UserJpaRepository extends JpaRepository<Users, Long>{

    Users findByName(String name);
}
