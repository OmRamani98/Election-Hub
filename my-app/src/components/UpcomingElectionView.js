import React, { useState, useEffect } from 'react';
import '../styles/Liveelection.css'; 

function UpcomingElectionView() {
    const [elections, setElections] = useState([]);
    const [error, setError] = useState('');
    const [selectedElectionId, setSelectedElectionId] = useState(null); // State to track the selected election ID

    const handleElectionClick = (electionId) => {
        setSelectedElectionId(electionId);
        sessionStorage.setItem("electionUpcomingId", electionId);
        window.location.href = '/candidate-registration';
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/election/upcoming');
                if (!response.ok) {
                    throw new Error('Failed to fetch upcoming elections');
                }
                const data = await response.json();
                setElections(data);
            } catch (error) {
                console.error('Error fetching upcoming elections:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <center>
            <div className="live-elections-container">
                <h2>Upcoming Elections</h2>
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

export default UpcomingElectionView;
