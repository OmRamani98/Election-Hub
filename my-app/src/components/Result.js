import React, { useEffect, useState } from 'react';
import '../styles/Result.css'; // Import CSS file

function Result() {
    const [winner, setWinner] = useState('');
    const [votes, setVotes] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/result')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch result');
            }
        })
        .then(data => {
            console.log(data);
            setWinner(data.name);
            setVotes(data.vote);
        })
        .catch(error => {
            // Handle error
            console.error('Error fetching result:', error);
            setError('Failed to fetch result. Please try again later.');
        });
    }, []);

    return (
        <div className="result-container">
            <h2 className="result-title">Election Result</h2>
            {error ? (
                <p className="result-error">{error}</p>
            ) : (
                <div>
                    <p className="result-winner">Winner: {winner}</p>
                    <p className="result-votes">Total Votes: {votes}</p>
                </div>
            )}
            <p className="result-note">Thank you for participating in the election.</p>
        </div>
    );
}

export default Result;
