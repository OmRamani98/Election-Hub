import React, { useEffect, useState } from 'react';
import CandidateItem from './CandidateItem';
import '../styles/CandidateList.css'; // Import CSS file

function CandidateList() {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/candidate/candidates')
        .then(response => response.json())
        .then(data => setCandidates(data))
        .catch(error => console.error('Error fetching candidates:', error));
    }, []);

    return (
        <div className="candidate-list-container">
            <center><h2 className="candidate-list-header">Candidates</h2></center>
            {candidates.map(candidate => (
                <div className="candidate-item" key={candidate.id}>
                    <h3 className="candidate-name">{candidate.name}</h3>
                    <p className="candidate-party">{candidate.party}</p>
                    <button className="vote-button">Vote</button>
                </div>
            ))}
        </div>
    );
}

export default CandidateList;
