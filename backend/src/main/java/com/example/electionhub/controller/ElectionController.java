package com.example.electionhub.controller;

import com.example.electionhub.model.Admin;
import com.example.electionhub.model.Candidate;
import com.example.electionhub.model.Election;
import com.example.electionhub.repository.AdminRepository;
import com.example.electionhub.repository.ElectionRepository;
import com.example.electionhub.service.ElectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/election")
public class ElectionController {

    @Autowired
    private ElectionService electionService;

    @Autowired

    AdminRepository adminRepository;
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/creat/{adminusername}")
    public Election createElection(@PathVariable String adminusername,@RequestBody Election election) {

        Admin a=adminRepository.findByUsername(adminusername);
        election.setAdmin(a);
        return electionService.createElection(election);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/upcoming")
    public List<Election> getUpcomingElections() {

        return electionService.getUpcomingElections();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/live")
    public List<Election> getLiveElections() {
        return electionService.getLiveElections();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/completed")
    public List<Election> getCompletedElections() {
        return electionService.getCompletedElections();
    }


}
