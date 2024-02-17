package com.example.electionhub.repository;

import com.example.electionhub.model.Election;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ElectionRepository extends JpaRepository<Election, Long> {
}
