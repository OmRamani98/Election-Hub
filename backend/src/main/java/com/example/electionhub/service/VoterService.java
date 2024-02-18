package com.example.electionhub.service;
import com.example.electionhub.model.Candidate;
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
    public Voter loginVoter(String name, String voterId) {

        Voter voter = voterRepository.findByName(name);
        if (voter != null && voter.getVoterId().equals(voterId)) {
            // Successful login
            return voter;
        } else {
            // Failed login
            return null;
        }
    }

    public Voter findVoterById(String voterId){ return voterRepository.findByVoterId(voterId);}

    // Other voter related services
}
