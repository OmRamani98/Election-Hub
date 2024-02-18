// CandidateRepository.java
package com.example.electionhub.repository;

import com.example.electionhub.model.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface CandidateRepository extends JpaRepository<Candidate, Long> {
    @Query("SELECT c FROM Candidate c JOIN c.election e WHERE e.id = :electionId")
    List<Candidate> findAllByElectionId(@Param("electionId") Long electionId);

}
