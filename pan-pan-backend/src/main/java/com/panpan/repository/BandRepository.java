package com.panpan.repository;

import java.util.Optional;

import com.panpan.model.Band;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BandRepository extends JpaRepository<Band, Long>{
    Optional<Band> findById(Long id);
}
