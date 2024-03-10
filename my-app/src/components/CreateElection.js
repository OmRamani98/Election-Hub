import React, { useState } from 'react';
import axios from 'axios';

function AdminPanel() {
    const [electionTitle, setElectionTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const adminusername=sessionStorage.getItem("adminusername");
    console.log(adminusername);

    
    const handleCreateElection = async () => {
        try {
            console.log(electionTitle, startDate, endDate );
            const response = await fetch(`http://localhost:8080/api/election/creat/${adminusername}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: electionTitle, startDate, endDate})
                
            });
            const data = await response.json();
            console.log(data); 
            window.location.href = '/successfully-election-created';
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <center><div className="login-container">
            <h2>Create Election</h2>
            <div>
                <input type="text" placeholder="Title" value={electionTitle} onChange={(e) => setElectionTitle(e.target.value)} />
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                <button onClick={handleCreateElection}>Create Election</button>
            </div>
            {/* Other admin functionalities can be added here */}
        </div></center>
    );
}

export default AdminPanel;
