import React, { useState } from 'react';
import '../styles/VoterLogin.css'; 

function VoterLogin() {
    const [name, setName] = useState('');
    const [voterId, setVoterId] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/voter/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, voterId }),
            });
            if (response.ok) {
                // Voter login successful
                console.log('Voter logged in successfully');
                // Redirect to candidate list
                window.location.href = '/candidates';
            } else {
                // Voter login failed
                setError('Invalid username or voter ID');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Network error. Please try again later.');
        }
    };

    return (
        <center><div className="login-container">
            <h2>Voter Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type="text" value={voterId} onChange={(e) => setVoterId(e.target.value)} placeholder="Voter ID" />
                <button type="submit">Login</button>
            </form>
            {error && <div>{error}</div>}
        </div>
        </center>
    );
}

export default VoterLogin;
