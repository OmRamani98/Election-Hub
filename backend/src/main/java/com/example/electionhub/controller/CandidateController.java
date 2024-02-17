// CandidateController.java
package com.example.electionhub.controller;

import com.example.electionhub.model.Candidate;
import com.example.electionhub.repository.CandidateRepository;
import com.example.electionhub.service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/candidates")
public class CandidateController {

    @Autowired
    private CandidateService candidateService;

    @PostMapping("/")
    public Candidate registerCandidate(@RequestBody Candidate candidate) {
        return candidateService.registerCandidate(candidate);
    }

    // Other endpoints for candidate functionalities

}
