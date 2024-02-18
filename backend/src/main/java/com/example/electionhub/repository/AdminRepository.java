package com.example.electionhub.repository;

import com.example.electionhub.model.Admin;
import com.example.electionhub.model.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Admin save(Admin admin);
}
