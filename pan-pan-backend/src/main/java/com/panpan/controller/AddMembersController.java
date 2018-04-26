
package com.panpan.controller;

import javax.persistence.PostRemove;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.panpan.model.Band;
import com.panpan.repository.VerificationTokenRepository;

import antlr.collections.List;

@RequestMapping("/addMember")
@RestController
public class AddMembersController {

	@Autowired
	private BandRepository bandRepository;

	@GetMapping("/idband")
	public Band findBand(long idBand) {
		
		return null;
	}
}
