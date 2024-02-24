import React, { useState } from 'react';
import axios from 'axios';

function AdminPanel() {
    const [electionTitle, setElectionTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // const handleCreateElection = async () => {
    //     try {
    //         const response = await axios.post('http//locathost:8080/api/admin/election', { title: electionTitle, startDate, endDate });
    //         console.log(response.data); // Handle response accordingly
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };
    const handleCreateElection = async () => {
        try {
            console.log(electionTitle, startDate, endDate );
            const response = await fetch('http://localhost:8080/api/election/creat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: electionTitle, startDate, endDate })
                
            });
            const data = await response.json();
            console.log(data); // Handle response according
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <div>
            <h2>Admin Panel</h2>
            <div>
                <h3>Create Election</h3>
                <input type="text" placeholder="Title" value={electionTitle} onChange={(e) => setElectionTitle(e.target.value)} />
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                <button onClick={handleCreateElection}>Create Election</button>
            </div>
            {/* Other admin functionalities can be added here */}
        </div>
    );
}

export default AdminPanel;
