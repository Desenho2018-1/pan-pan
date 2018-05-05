package com.panpan.repository;

import com.panpan.model.SongComponent;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SongRepository extends JpaRepository<SongComponent, Long>{

}
