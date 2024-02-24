package com.example.electionhub.repository;

import com.example.electionhub.model.Election;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface ElectionRepository extends JpaRepository<Election, Long> {
    @Query("SELECT e FROM Election e WHERE e.startDate > CURRENT_DATE")
    List<Election> findUpcomingElections();

    @Query("SELECT e FROM Election e WHERE e.startDate <= CURRENT_DATE AND e.endDate >= CURRENT_DATE")
    List<Election> findLiveElections();

    @Query("SELECT e FROM Election e WHERE e.endDate < CURRENT_DATE")
    List<Election> findCompletedElections();
}
