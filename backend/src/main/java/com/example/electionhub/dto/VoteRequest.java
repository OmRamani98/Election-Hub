package com.example.electionhub.dto;

public class VoteRequest {

        private Long voterId;
        private Long electionId;
        private Long candidateId;
public VoteRequest(Long v,Long e,Long c)
{
    this.voterId=v;
    this.candidateId=c;
    this.electionId=e;
}
    public Long getVoterId() {
        return voterId;
    }

    public void setVoterId(Long voterId) {
        this.voterId = voterId;
    }

    public Long getElectionId() {
        return electionId;
    }

    public void setElectionId(Long electionId) {
        this.electionId = electionId;
    }

    public Long getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(Long candidateId) {
        this.candidateId = candidateId;
    }
// Constructor, getters, and setters

}
