// CandidateRepository.java
package com.example.electionhub.repository;

import com.example.electionhub.model.Candidate;
import com.example.electionhub.model.Election;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface CandidateRepository extends JpaRepository<Candidate, Long> {

    @Query("SELECT c FROM Candidate c WHERE c.election.id = :electionId")
    List<Candidate> findByElectionId(Long electionId);

}
