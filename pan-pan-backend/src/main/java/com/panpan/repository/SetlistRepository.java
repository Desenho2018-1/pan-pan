package com.panpan.repository;

import java.util.Collection;

import com.panpan.model.Setlist;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SetlistRepository extends JpaRepository<Setlist, Long> {
    Collection<Setlist> findByBandId(Long bandId);
}

