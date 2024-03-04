package com.example.electionhub.repository;

import com.example.electionhub.model.Admin;
import com.example.electionhub.model.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Admin save(Admin admin);

    @Query("SELECT a FROM Admin a WHERE a.username = :username")
    Admin findByUsername(String username);

}
