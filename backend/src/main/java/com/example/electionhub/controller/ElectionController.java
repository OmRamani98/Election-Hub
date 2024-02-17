package com.example.electionhub.controller;

import com.example.electionhub.model.Election;
import com.example.electionhub.repository.ElectionRepository;
import com.example.electionhub.service.ElectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/elections")
public class ElectionController {

    @Autowired
    private ElectionService electionService;

    @PostMapping("/")
    public Election createElection(@RequestBody Election election) {
        return electionService.createElection(election);
    }

    // Other endpoints for election functionalities

}
