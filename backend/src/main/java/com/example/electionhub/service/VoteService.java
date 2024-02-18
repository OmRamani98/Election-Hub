package com.example.electionhub.service;
import com.example.electionhub.dto.VoteRequest;
import com.example.electionhub.model.Candidate;
import com.example.electionhub.model.Election;
import com.example.electionhub.model.Vote;
import com.example.electionhub.model.Voter;
import com.example.electionhub.repository.CandidateRepository;
import com.example.electionhub.repository.ElectionRepository;
import com.example.electionhub.repository.VoteRepository;
import com.example.electionhub.repository.VoterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Service;
@Service
public class VoteService {

    @Autowired
    private VoteRepository voteRepository;

    public Vote submitVote(Vote vote) {
        return voteRepository.save(vote);
    }


    // Other vote related services

    @Autowired
    private ElectionRepository electionRepository;

    @Autowired
    private CandidateRepository candidateRepository;
    @Autowired
    private VoterRepository voterRepository;

    public void castVote(VoteRequest voteRequest) {
        Election election = electionRepository.findById(voteRequest.getElectionId())
                .orElseThrow(() -> new IllegalArgumentException("Election not found."));
        Candidate candidate = candidateRepository.findById(voteRequest.getCandidateId())
                .orElseThrow(() -> new IllegalArgumentException("Candidate not found."));

        Voter voter= voterRepository.findById(voteRequest.getVoterId())
                .orElseThrow(() -> new IllegalArgumentException("Candidate not found."));
        // Check if the election is still open for voting

        // Check if the voter has already voted in this election

        // Save the vote
        Vote vote = new Vote();
        vote.setElection(election);
        vote.setCandidate(candidate);
        vote.setVoter(voter);
        voteRepository.save(vote);
    }
}

