package com.panpan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.panpan.model.Song;
import com.panpan.model.SongComponent;
import com.panpan.repository.SongRepository;

@RestController
@CrossOrigin
@RequestMapping("/song")
public class SongController {
	
	@Autowired
	SongRepository songRepository;

	@GetMapping("/{name}/{style}/{bandName}")
	public SongComponent createSong(@PathVariable String name, 
							@PathVariable String style,@PathVariable String bandName) {
		
			SongComponent component = new Song(name,style,bandName);
			songRepository.save(component);
			return component;
	}
}
