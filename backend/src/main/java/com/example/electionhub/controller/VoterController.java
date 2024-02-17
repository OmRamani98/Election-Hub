// VoterController.java
package com.example.electionhub.controller;

import com.example.electionhub.model.Voter;
import com.example.electionhub.repository.VoterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/voter")
public class VoterController {

    @Autowired
    private VoterRepository voterRepository;


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public Voter addVoter(@RequestBody Voter voter) {
               return voterRepository.save(voter);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<String> voterLogin(@RequestBody Voter voter) {
        Optional<Voter> voterOptional = voterRepository.findByNameandVoterId(voter.getName(), voter.getVoterId());
        if (voterOptional.isPresent()) {
            return ResponseEntity.ok("Voter logged in successfully");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }
}
