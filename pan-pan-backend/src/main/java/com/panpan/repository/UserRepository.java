package com.panpan.repository;

import org.springframework.data.repository.CrudRepository;

import com.panpan.model.User;

public interface UserRepository extends CrudRepository<User, Long> {

}
