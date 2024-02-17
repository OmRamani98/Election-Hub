package com.example.electionhub.controller;


import com.example.electionhub.model.Admin;
import com.example.electionhub.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    private ElectionRepository electionRepository;

    @Autowired
    private CandidateRepository candidateRepository;

    @PostMapping("/election")
    public ResponseEntity<Election> createElection(@RequestBody Election election) {
        Election createdElection = electionRepository.save(election);
        return ResponseEntity.ok(createdElection);
    }

    @PostMapping("/candidate")
    public ResponseEntity<Candidate> createCandidate(@RequestBody Candidate candidate) {
        Candidate createdCandidate = candidateRepository.save(candidate);
        return ResponseEntity.ok(createdCandidate);
    }

    // Other admin endpoints for managing elections and candidates
}
