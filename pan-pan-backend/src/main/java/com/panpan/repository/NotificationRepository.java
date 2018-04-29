package com.panpan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import com.panpan.model.EmailNotification;

@RepositoryRestController
public interface EmailNotificationRepository extends JpaRepository<EmailNotification, Long> {

}