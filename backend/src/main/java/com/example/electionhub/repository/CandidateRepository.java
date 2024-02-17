// CandidateRepository.java
package com.example.electionhub.repository;

import com.example.electionhub.model.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long> {
    @Query("SELECT c FROM Candidate c WHERE c.vote = (SELECT MAX(c2.vote) FROM Candidate c2)")
    Candidate findTopByOrderByVoteDesc();
}
