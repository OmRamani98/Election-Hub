import React, { useState, useEffect } from 'react';
import CandidateItem from './CandidateItem';

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
        <div>
            <h2>Candidates for Election</h2>
            {error && <p>{error}</p>}
            <ul>
                {candidates.map(candidate => (
                    <CandidateItem candidate={candidate}/>
                ))}
            </ul>
        </div>
    );
}

export default CandidateList;
