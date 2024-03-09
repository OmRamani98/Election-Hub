import React, { useState, useEffect } from 'react';
import CandidateItem from './CandidateItem';
import '../styles/CandidateList.css';

function CandidateList({ election}) {
    const [candidates, setCandidates] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/candidate/candidates/${election.id}`, {
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
    }, [election]);

    return (
        <div style={{paddingLeft:"100px", paddingRight:"100px"}}>
             < div className="candidate-list" >
            <h2>Candidates for Election:{election.title}</h2>
            {error && <p>{error}</p>}
            <div className="candidate-list-container">
                       {candidates.map(candidate => (
                    <CandidateItem key={candidate.id} candidate={candidate} election={election}/>
                ))}
            </div>
            </div>
        </div>
    );
}

export default CandidateList;
