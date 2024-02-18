package com.example.electionhub.service;

import com.example.electionhub.model.Election;
import com.example.electionhub.repository.ElectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class ElectionService {

    @Autowired
    private ElectionRepository electionRepository;

    public Election createElection(Election election) {
        return electionRepository.save(election);
    }

    public List<Election> getUpcomingElections() {
        return electionRepository.findUpcomingElections();
    }

    public List<Election> getLiveElections() {
        return electionRepository.findLiveElections();
    }
    // Other election related services
}
