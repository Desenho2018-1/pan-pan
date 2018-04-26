
package com.panpan.controller;

import javax.persistence.PostRemove;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.panpan.model.Band;
import com.panpan.repository.BandRepository;
import com.panpan.repository.VerificationTokenRepository;

import antlr.collections.List;

@RestController
@RequestMapping("/addMember")
public class AddMembersController {

	
	@Autowired
    private BandRepository bandRepository;

	@PostMapping("/idband")
	public Band findBandById(long idBand) {
		
		Band band = bandRepository.findBandById(3);
		return band;
	}
}
