import React, { useState } from 'react';
import '../styles/VoterLogin.css'; 
import CandidateList from './CandidateList';
function VoterLogin() {
    const [name, setName] = useState('');
    const [voterId, setVoterId] = useState('');
    const [error, setError] = useState('');
    const[id,setId]=useState('');
    const handleSubmit = async (e) => {
        
        
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/voter/login', {
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
                //window.location.href = '/candidates';


                const data=await response.json();
                console.log(data);
                setId(data.id);
                sessionStorage.setItem("voterId",data.id);
                window.location.href = '/live-election';
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
         {/* <CandidateList voter={{ name, voterId }}/> */}

            {error && <div>{error}</div>}
        </div>
        </center>
    );
}

export default VoterLogin;
