// CandidateController.java
package com.example.electionhub.controller;

import com.example.electionhub.model.Candidate;
import com.example.electionhub.repository.CandidateRepository;
import com.example.electionhub.service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/candidate")
public class CandidateController {

    @Autowired
    private CandidateService candidateService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register/{ElectionId}")
    public Candidate registerCandidate(@RequestBody Candidate candidate ,@PathVariable long ElectionId) {
         return candidateService.registerCandidate(candidate,ElectionId);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/candidates/{electionId}")
    public List<Candidate> getAllCandidatesOfElection(@PathVariable Long electionId) {
        return candidateService.getAllCandidatesByElectionId(electionId);
    }


    // Other endpoints for candidate functionalities

}
