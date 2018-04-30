package com.panpan.controller;

import java.net.URI;
import java.util.Collection;

import com.panpan.model.Setlist;
import com.panpan.repository.BandRepository;
import com.panpan.repository.SetlistRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/api/bands/{bandId}/setlists")
class SetlistRestController {
    private final SetlistRepository setlistRepository;
    private final BandRepository bandRepository;

    @Autowired
    SetlistRestController(SetlistRepository setlistRepository, BandRepository bandRepository) {
        this.setlistRepository = setlistRepository;
        this.bandRepository = bandRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    Collection<Setlist> readSetlists(@PathVariable Long bandId) {
        return this.setlistRepository.findByBandId(bandId);
    }

    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<?> add(@PathVariable Long bandId, @RequestBody Setlist setlist) {
        return this.bandRepository.findById(bandId).map(
            band -> {
                Setlist result = setlistRepository.save(new Setlist(band, setlist.getName(), setlist.getSongs()));

                URI location = ServletUriComponentsBuilder
                    .fromCurrentRequest().path("/{id}")
                    .buildAndExpand(result.getId()).toUri();


                return ResponseEntity.created(location).build();
            }
        ).orElse(ResponseEntity.noContent().build());
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{setlistId}")
    ResponseEntity<?> delete(@PathVariable("bandId") Long bandId, @PathVariable("setlistId") Long setlistId) {
        this.setlistRepository.deleteById(setlistId);
        return ResponseEntity.accepted().build();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{setlistId}")
    Setlist readSetlist(@PathVariable("setlistId") Long setlistId) {
        return this.setlistRepository.findById(setlistId).get();
    }
}
