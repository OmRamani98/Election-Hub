package com.example.electionhub.controller;

import com.example.electionhub.dto.VoteRequest;
import com.example.electionhub.model.Candidate;
import com.example.electionhub.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/vote")
public class VoteController {

    @Autowired
    private CandidateRepository candidateRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public String submitVote(@RequestBody VoteRequest request) {
        Long candidateId = request.getCandidateId();
        Candidate candidate = candidateRepository.findById(candidateId)
                .orElseThrow(() -> new RuntimeException("Candidate not found with id: " + candidateId));

        candidate.setVote(candidate.getVote() + 1);
        candidateRepository.save(candidate);

        return "Vote submitted successfully for candidate: " + candidate.getName();
    }
}
