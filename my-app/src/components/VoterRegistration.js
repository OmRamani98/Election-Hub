// VoterRegistration.js
import React, { useState } from 'react';
import '../styles/VoterLogin.css'; 

function VoterRegistration() {
    const [name, setUsername] = useState('');
    const [voterId, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,voterId);
        fetch('http://localhost:8080/api/voter/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, voterId }),
        })
        .then(response => {
            if (response.ok) {
                // Voter registration successful, handle success
                console.log('Voter registered successfully');
            } else {
                console.error('Voter registration failed');
            }
        })
        .catch(error => {
              console.error('Network error:', error);
        });
    };

    return (
        
            <center><div className="login-container">
            <center><h2>Voter Registration</h2></center>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={voterId} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Register</button>
            </form>
        </div></center>
    );
}

export default VoterRegistration;
