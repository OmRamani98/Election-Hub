package com.example.electionhub.controller;

import com.example.electionhub.model.Voter;
import com.example.electionhub.service.VoterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/voters")
public class VoterController {

    @Autowired
    private VoterService voterService;

    @PostMapping("/")
    public Voter registerVoter(@RequestBody Voter voter) {
        return voterService.registerVoter(voter);
    }

    // Other endpoints for voter functionalities

}

