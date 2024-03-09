import React, { useState, useEffect } from 'react';
import '../styles/Liveelection.css'; 

function CompletedElectionView() {
    const [elections, setElections] = useState([]);
    const [error, setError] = useState('');
    const [selectedElectionId, setSelectedElectionId] = useState(null); // State to track the selected election ID

    const handleElectionClick = (electionId) => {
        setSelectedElectionId(electionId);
        sessionStorage.setItem("electionCompletedId", electionId);
        window.location.href = '/result';
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

                if (response.ok) {
                    const data = await response.json();
                    setElections(data);
                } else {
                    setError('Failed to fetch completed elections');
                }
            } catch (error) {
                setError('Network error. Please try again later.');
            }
        };
        fetchElections();
    }, []);

    return (
        <center>
            <div className="live-elections-container">
                <h2>Completed Elections</h2>
                {error && <p>{error}</p>}
                {elections.map(election => (
                    <div key={election.id} onClick={() => handleElectionClick(election.id)}>
                        {election.title}
                    </div>
                ))}
            </div>
        </center>
    );
}

export default CompletedElectionView;
