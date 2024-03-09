import React, { useState, useEffect } from 'react';
import CandidateList from './CandidateList';
import '../styles/Liveelection.css'; 
function LiveElectionView() {
    const [liveElections, setLiveElections] = useState([]);
    const [selectedElection, setSelectedElection] = useState(null);
    const [error, setError] = useState('');

    const handleElectionClick = (election) => {
        setSelectedElection(election);
    };

    useEffect(() => {
        const fetchElections = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/election/live', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setLiveElections(data);
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
        <center>
            {!selectedElection && (
                <div className="live-elections-container">
                    <h2>Live Elections</h2>
                    {error && <p>{error}</p>}
                    {liveElections.map(election => (
                        <div key={election.id} onClick={() => handleElectionClick(election)}>
                            {election.title}
                        </div>
                    ))}
                </div>
            )}
            {selectedElection && (
                <div>
                    <h2>{selectedElection.title}</h2>
                    <CandidateList electionId={selectedElection.id} />
                </div>
            )}
        </center>
    );
}

export default LiveElectionView;
