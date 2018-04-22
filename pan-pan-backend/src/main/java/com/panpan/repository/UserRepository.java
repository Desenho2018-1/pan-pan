package com.panpan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.panpan.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByFirstName(String name);

}
