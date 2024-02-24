package com.example.electionhub.controller;

import com.example.electionhub.model.Election;
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

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/creat")
    public Election createElection(@RequestBody Election election) {

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
