package com.example.electionhub.repository;

import com.example.electionhub.model.Voter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


public interface VoterRepository extends JpaRepository<Voter, Long> {
    Voter findByName(String username);

    Voter findByVoterId(String voterId);

}
