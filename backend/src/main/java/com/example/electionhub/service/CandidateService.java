package com.example.electionhub.service;

import com.example.electionhub.model.Candidate;
import com.example.electionhub.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class CandidateService {

    @Autowired
    private CandidateRepository candidateRepository;

    public Candidate registerCandidate(Candidate candidate) {
        return candidateRepository.save(candidate);
    }

    // Other candidate related services
}

