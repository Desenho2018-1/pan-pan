package com.panpan.repository;

import com.panpan.model.Band;
import org.springframework.stereotype.Component;
import org.springframework.data.repository.CrudRepository;

@Component
public interface BandRepository extends CrudRepository<Band, Long>{

}
