
package com.panpan.controller;

import javax.persistence.PostRemove;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.panpan.model.Band;
import com.panpan.repository.BandRepository;
import com.panpan.repository.VerificationTokenRepository;

import antlr.collections.List;

@RestController
public class AddMembersControler {

	@Autowired
	private BandRepository bandRepository;

	@GetMapping("/idband")
	public Band findBand(long idBand) {
		List bandList = (List) bandRepository.findBandById(3);
		return band;
	}
}
