// CandidateRegistration.js
import React, { useState } from 'react';
import '../styles/VoterLogin.css'; 
function CandidateRegistration() {
    const [name, setName] = useState('');
    const [party, setParty] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/candidate/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, party }),
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
        <center><div className="login-container">
            <center><h2>Candidate Registration</h2></center>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type="text" value={party} onChange={(e) => setParty(e.target.value)} placeholder="Party" />
                <button type="submit">Register</button>
            </form>
        </div></center>
    );
}

export default CandidateRegistration;
