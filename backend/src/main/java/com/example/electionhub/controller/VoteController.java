package com.example.electionhub.controller;

import com.example.electionhub.model.Vote;
import com.example.electionhub.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/votes")
public class VoteController {

    @Autowired
    private VoteService voteService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/")
    public Vote submitVote(@RequestBody Vote vote) {
        return voteService.submitVote(vote);
    }

    // Other endpoints for vote functionalities

}
