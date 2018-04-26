package com.panpan.repository;

import com.panpan.model.Band;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface BandRepository extends JpaRepository<Band, Long>{

  Band findBandById(long id);
}
