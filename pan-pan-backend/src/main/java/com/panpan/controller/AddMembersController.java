
package com.panpan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.panpan.model.Band;
import com.panpan.model.User;
import com.panpan.repository.BandRepository;

@RestController
@RequestMapping("/addMember")
public class AddMembersController {

	@Autowired
	private BandRepository bandRepository;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/{idBand}/{name}")
	public Band findBandById(@PathVariable long idBand, @PathVariable String name) {

		User user = new User(name, "test");
		Band band = bandRepository.findBandById(idBand);
		band.getMembers().add(user);
		System.out.println(band.getId());
		bandRepository.save(band);
		return band;

	}
}
