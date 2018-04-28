package com.panpan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import com.panpan.model.User;

@RepositoryRestController
public interface UserRepository extends JpaRepository<User, Long> {

	User findByFirstName(@Param("firstName") String firstName);

}
