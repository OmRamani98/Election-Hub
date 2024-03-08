import React, { useState } from 'react';
import '../styles/CandidateItem.css';

function CandidateItem({ candidate }) {
    const handleVote = async () => {
        const voterId = sessionStorage.getItem("voterId");
        const electionId = sessionStorage.getItem("electionId");
        const candidateId = candidate.id;

        console.log(sessionStorage.getItem("voterId"));
        try {
            const response = await fetch(`http://localhost:8080/api/vote/submitVote/${voterId}/${electionId}/${candidateId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                console.log('Vote submitted successfully');
            } else {
                console.error('Failed to submit vote');
            }
        } catch (error) {
            console.error('Error submitting vote:', error);
        }
    };

    return (
        <div className="candidate-item" key={candidate.id}>
            <img src={`data:image/jpeg;base64,${candidate.image}`} alt={candidate.name} className="candidate-image" />
            <h3 className="candidate-name">{candidate.name}</h3>
            <p className="candidate-party">{candidate.party}</p>
            <p className="candidate-age">Age: {candidate.age}</p>
            <p className="candidate-gender">Gender: {candidate.gender}</p>
            <p className="candidate-education">Education: {candidate.education}</p>
            <button className="vote-button" onClick={handleVote}>Vote</button>
        </div>
    );
}

export default CandidateItem;
