package com.example.electionhub.service;

import com.example.electionhub.model.Candidate;
import com.example.electionhub.model.Election;
import com.example.electionhub.repository.CandidateRepository;
import com.example.electionhub.repository.ElectionRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class CandidateService {

    @Autowired
    private CandidateRepository candidateRepository;
    @Autowired
    private ElectionRepository elctionRepository;





    public List<Candidate> getAllCandidates() {
            return candidateRepository.findAll();
    }
    public List<Candidate> getAllCandidatesByElectionId(Long electionId) {
        return candidateRepository.findAllByElectionId(electionId);
    }

    public Candidate findCandidateById(Long id){ return candidateRepository.findById(id).orElse(null);}

    public Candidate registerCandidate(Candidate candidate, long electionId) {
        Election e=elctionRepository.findById(electionId).orElse(null);
        candidate.setElection(e);
        return candidateRepository.save(candidate);

    }
    // Other candidate related services
}

