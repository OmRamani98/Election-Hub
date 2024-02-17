package com.example.electionhub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.electionhub.model.Candidate;
import com.example.electionhub.repository.CandidateRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/result")
public class ResultController {

    @Autowired
    private CandidateRepository candidateRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public Candidate getWinner() {
        // Assuming the candidate with the highest number of votes is the winner
        Candidate winner = candidateRepository.findTopByOrderByVoteDesc();
        return winner;
    }
}
