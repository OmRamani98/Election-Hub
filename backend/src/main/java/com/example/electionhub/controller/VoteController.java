package com.example.electionhub.controller;

import com.example.electionhub.dto.VoteRequest;
import com.example.electionhub.model.Candidate;
import com.example.electionhub.model.Election;
import com.example.electionhub.model.Vote;
import com.example.electionhub.model.Voter;
import com.example.electionhub.repository.VoteRepository;
import com.example.electionhub.service.CandidateService;
import com.example.electionhub.service.VoteService;
import com.example.electionhub.service.VoterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/vote")
public class VoteController {

    @Autowired
    private VoteService voteService;


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/submitVote/{voterId}/{electionId}/{candidateId}")
    public ResponseEntity<String> submitVote(@PathVariable Long voterId,@PathVariable Long electionId,@PathVariable Long candidateId) {
        System.out.println("123");
        VoteRequest voteRequest=new VoteRequest(voterId,electionId,candidateId);
        System.out.println(voteRequest.getElectionId()+voteRequest.getVoterId()+voteRequest.getCandidateId());

        try {
            voteService.submitVote(voteRequest);
            return ResponseEntity.ok("Vote successfully.");
        } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to cast vote: " + e.getMessage());
        }
    }
    // Other endpoints for vote functionalities

}
