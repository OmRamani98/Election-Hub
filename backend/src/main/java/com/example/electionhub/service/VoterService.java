package com.example.electionhub.service;
import com.example.electionhub.model.Voter;
import com.example.electionhub.repository.VoterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VoterService {

    @Autowired
    private VoterRepository voterRepository;

    public Voter registerVoter(Voter voter) {
        return voterRepository.save(voter);
    }

    // Other voter related services
}
