import React, { useState, useEffect } from 'react';
import CandidateItem from './CandidateItem';
import '../styles/CandidateList.css';

function CandidateList({ electionId }) {
    const [candidates, setCandidates] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/candidate/candidates/${electionId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setCandidates(data);
                } else {
                    setError('Failed to fetch candidates');
                }
            } catch (error) {
                setError('Network error. Please try again later.');
            }
        };
        fetchCandidates();
    }, [electionId]);

    return (
        <div style={{paddingLeft:"100px", paddingRight:"100px"}}>
            <h2>Candidates for Election</h2>
            {error && <p>{error}</p>}
            <div className="candidate-list-container">
                {candidates.map(candidate => (
                    <CandidateItem key={candidate.id} candidate={candidate} />
                ))}
                {candidates.map(candidate => (
                    <CandidateItem key={candidate.id} candidate={candidate} />
                ))}
                {candidates.map(candidate => (
                    <CandidateItem key={candidate.id} candidate={candidate} />
                ))}
            </div>
        </div>
    );
}

export default CandidateList;
