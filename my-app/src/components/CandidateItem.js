// CandidateItem.js
import React from 'react';
import '../styles/CandidateItem.css'

function CandidateItem({ candidate }) {
    const handleVote = async () => {
        try {
            const response = await fetch('http://localhost:8080/vote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ candidateId: candidate.id }),
            });
            if (response.ok) {
                console.log('Vote submitted successfully');
            } else {
                console.error('Failed to submit vote');
            }
        } catch (error) {
            console.error('Error submitting vote:', error);
        }
    };

    return (
        <div>
            <h3>{candidate.name}</h3>
            <p>{candidate.party}</p>
            <button onClick={handleVote}>Vote</button>
        </div>
    );
}

export default CandidateItem;
