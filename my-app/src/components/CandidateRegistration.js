import React, { useState, useEffect } from 'react';
import '../styles/VoterLogin.css';

function CandidateRegistration() {
    const [name, setName] = useState('');
    const [party, setParty] = useState('');
    const [elections, setElections] = useState([]);
    const [selectedElectionId, setSelectedElectionId] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("sfef");
                const response = await fetch('http://localhost:8080/api/election/upcoming');
                if (!response.ok) {
                    throw new Error('Failed to fetch upcoming elections');
                }
                const data = await response.json();
                setElections(data);
                console.log(data);
                if (data.length > 0) {
                    setSelectedElectionId(data[0].id);
                }
            } catch (error) {
                console.error('Error fetching upcoming elections:', error);
            }
        };
    
        fetchData();
    }, []);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/api/candidate/register/${selectedElectionId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, party}),
        })
        .then(response => {
            if (response.ok) {
                // Candidate registration successful, handle success
                console.log('Candidate registered successfully');
            } else {
                // Candidate registration failed, handle error
                console.error('Candidate registration failed');
            }
        })
        .catch(error => {
            // Handle network error
            console.error('Network error:', error);
        });
    };

    return (
        <center>
            <div className="login-container"> 
                <center><h2>Candidate Registration</h2></center>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    <input type="text" value={party} onChange={(e) => setParty(e.target.value)} placeholder="Party" />
                    <select style={{color:"black",width:"20vw"}}value={selectedElectionId} onChange={(e) => setSelectedElectionId(e.target.value)}>
                        {elections.map(election => (
                            <option style={{color:"black",width:"20vw"}} key={election.id} value={election.id}>{election.title}</option>
                        ))}
                    </select>
                    <button type="submit">Register</button>
                </form>
            </div>
        </center>
    );
}

export default CandidateRegistration;
