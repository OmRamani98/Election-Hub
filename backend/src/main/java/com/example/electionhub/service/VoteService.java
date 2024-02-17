package com.example.electionhub.service;
import com.example.electionhub.model.Vote;
import com.example.electionhub.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class VoteService {

    @Autowired
    private VoteRepository voteRepository;

    public Vote submitVote(Vote vote) {
        return voteRepository.save(vote);
    }

    // Other vote related services
}
