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

    @Query("SELECT v.candidate FROM Vote v WHERE v.election = :election GROUP BY v.candidate HAVING COUNT(v) = (SELECT MAX(voteCount) FROM (SELECT COUNT(*) as voteCount FROM Vote WHERE election = :election GROUP BY candidate))")
    List<Candidate> getWinners(@Param("election") Election election);

}
