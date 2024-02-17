package com.example.electionhub.repository;

import com.example.electionhub.model.Voter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VoterRepository extends JpaRepository<Voter, Long> {

    @Query("SELECT v FROM Voter v WHERE v.name = ?1 AND v.voterId = ?2")
    Optional<Voter> findByNameandVoterId(String name, String voterId);
}
