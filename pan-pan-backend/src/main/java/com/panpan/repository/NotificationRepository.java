package com.panpan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import com.panpan.model.Notification;

@RepositoryRestController
public interface NotificationRepository extends JpaRepository<Notification, Long> {

}