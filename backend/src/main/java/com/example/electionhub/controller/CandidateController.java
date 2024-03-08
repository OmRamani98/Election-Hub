// CandidateController.java
package com.example.electionhub.controller;

import com.example.electionhub.model.Candidate;
import com.example.electionhub.model.Election;
import com.example.electionhub.repository.CandidateRepository;
import com.example.electionhub.repository.ElectionRepository;
import com.example.electionhub.service.CandidateService;
import com.example.electionhub.service.ElectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/candidate")
public class CandidateController {

    @Autowired
    private CandidateService candidateService;
    @Autowired
    private ElectionRepository electionRepository;


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register/{electionId}")
    public Candidate registerCandidate(@ModelAttribute Candidate candidate, @PathVariable long electionId,
                                       @RequestParam("file") MultipartFile file) {
        return candidateService.registerCandidate(candidate, electionId, file);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/candidates/{electionId}")
    public List<Candidate> getAllCandidatesOfElection(@PathVariable long electionId) {
        return candidateService.getAllCandidatesByElectionId(electionId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{electionId}/winner")
    public List<Candidate> getWinner(@PathVariable Long electionId) {
        Election e=electionRepository.findById(electionId).orElse(null);
       return candidateService.getWinner(e);
    }

}
