import React, { useState } from 'react';
import '../styles/VoterLogin.css'; 

function VoterRegistration() {
    const [name, setUsername] = useState('');
    const [email, setEmail] = useState(''); // Add email state
    const [voterId, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, voterId); // Log the email value
        fetch('http://localhost:8080/api/voter/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, voterId }), // Include email in the request body
        })
        .then(response => {
            if (response.ok) {
                // Voter registration successful, handle success
                console.log('Voter registered successfully');
                window.location.href = '/voter-login'
            } else {
                console.error('Voter registration failed');
            }
        })
        .catch(error => {
              console.error('Network error:', error);
        });
    };

    return (
        <center>
            <div className="login-container">
                <center><h2>Voter Registration</h2></center>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e) => setUsername(e.target.value)} placeholder="User Name" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /> {/* Input field for email */}
                    <input type="password" value={voterId} onChange={(e) => setPassword(e.target.value)} placeholder="Voter Id" />
                    <button type="submit">Register</button>
                </form>
            </div>
        </center>
    );
}

export default VoterRegistration;
