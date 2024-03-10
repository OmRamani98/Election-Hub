package com.example.electionhub.service;

import com.example.electionhub.model.Candidate;
import com.example.electionhub.model.Election;
import com.example.electionhub.repository.CandidateRepository;
import com.example.electionhub.repository.ElectionRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class CandidateService {

    @Autowired
    private CandidateRepository candidateRepository;
    @Autowired
    private ElectionRepository elctionRepository;
    @Autowired
    private EmailService emailService;





    public List<Candidate> getAllCandidates() {
            return candidateRepository.findAll();
    }
    public List<Candidate> getAllCandidatesByElectionId(long electionId) {
        return candidateRepository.findByElectionId(electionId);
    }

    public Candidate findCandidateById(Long id){ return candidateRepository.findById(id).orElse(null);}

    public Candidate registerCandidate(Candidate candidate, long electionId, MultipartFile file) {
        try {
            Election e = elctionRepository.findById(electionId).orElse(null);
            emailService.sendSimpleMessage(candidate.getEmail(),"You have Successfully Register ","You have Successfully Register For Election "+e.getTitle());
            candidate.setElection(e);
            candidate.setImage(file.getBytes());
            return candidateRepository.save(candidate);
        } catch (IOException e) {
            // Handle IOException
            e.printStackTrace();
            return null;
        }
    }
    // Other candidate related services
    @PersistenceContext
    private EntityManager entityManager;

    public List<Candidate> getWinner(Election election) {
        return candidateRepository.getWinners(election);
    }
}

