package com.example.electionhub.repository;
import com.example.electionhub.model.Vote;
import org.springframework.data.jpa.repository.JpaRepository;



public interface VoteRepository extends JpaRepository<Vote, Long> {
}
