package com.example.electionhub.controller;

import com.example.electionhub.model.Voter;
import com.example.electionhub.service.VoterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/voter")
public class VoterController {

    @Autowired
    private VoterService voterService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public Voter registerVoter(@RequestBody Voter voter) {
        return voterService.registerVoter(voter);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public Voter loginVoter(@RequestBody Voter voter) {
        return voterService.loginVoter(voter.getName(), voter.getVoterId());
    }
    // Other endpoints for voter functionalities

}

