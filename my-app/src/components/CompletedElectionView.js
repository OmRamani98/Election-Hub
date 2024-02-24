import React, { useState, useEffect } from 'react';
import CandidateList from './CandidateList';

function LiveElectionView() {
    const [elections, setElections] = useState([]);
    const [error, setError] = useState('');

    const [selectedElectionId, setSelectedElectionId] = useState(null); // State to track the selected election ID

    const handleElectionClick = (electionId) => {
        setSelectedElectionId(electionId);
        sessionStorage.setItem("electionId",electionId);
        };
    useEffect(() => {
        const fetchElections = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/election/completed', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                  
                });
                // const data = await response.json();
                // setElections(data);
                if (response.ok) {
                    const data = await response.json();
                    setElections(data);
                } else {
                    setError('Failed to fetch live elections');
                }
            } catch (error) {
                setError('Network error. Please try again later.');
            }
        };
        fetchElections();
    }, []);

    return (
        <div>
            <h2>Live Elections</h2>
            {error && <p>{error}</p>}
            <ul>
    {elections.map(election => (
        <li key={election.id} onClick={() => handleElectionClick(election.id)}>{election.title}</li>
    ))}
</ul>
{selectedElectionId&& <CandidateList electionId={selectedElectionId}/>}
        </div>
    );
}

export default LiveElectionView;
