package com.example.electionhub.controller;

import com.example.electionhub.dto.VoteRequest;
import com.example.electionhub.model.Candidate;
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
    @Autowired
    private VoterService voterService;
    @Autowired
    private CandidateService candidateService;
    @Autowired
    private VoteRepository voteRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/submitVote/{candidateId}/{voterId}")
    public ResponseEntity<?> submitVote(@PathVariable Long candidateId, @PathVariable String voterId) {
        Candidate candidate = candidateService.findCandidateById(candidateId);
        Voter voter = voterService.findVoterById(voterId);
        Vote vote = new Vote(candidate,voter);
        voteRepository.save(vote);

        return ResponseEntity.ok("Vote Successfully added");
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/cast")
    public ResponseEntity<String> castVote(@RequestBody VoteRequest voteRequest) {
        try {
            voteService.castVote(voteRequest);
            return ResponseEntity.ok("Vote cast successfully.");
        } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to cast vote: " + e.getMessage());
        }
    }
    // Other endpoints for vote functionalities

}
