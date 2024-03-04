import React, { useState } from 'react';
import CompletedElection from './CompletedElectionView'

function ElectionWinner() {
    const [electionId, setElectionId] = useState('');
    const [winners, setWinners] = useState([]);
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setElectionId(event.target.value);
    };

    const getWinner = () => {
        fetch(`http://localhost:8080/api/candidate/${electionId}/winner`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setError(data.error);
                    setWinners([]);
                } else {
                    setWinners(data);
                    setError('');
                }
            })
            .catch(error => {
                setError('An error occurred while fetching the winner.');
                setWinners([]);
            });
    };

    return (
        <div>
            <CompletedElection/>
            <h1>Election Winner</h1>
            <label htmlFor="electionId">Enter Election ID:</label>
            <input type="text" id="electionId" value={electionId} onChange={handleInputChange} />
            <button onClick={getWinner}>Get Winner</button>

            {error && <p>{error}</p>}

            <h2>Winners</h2>
            {winners.length === 0 && <p>No winners found.</p>}
            {winners.length === 1 && <p>Winner: {winners[0].name}</p>}
            {winners.length > 1 && <p>It's a tie! Multiple winners.</p>}
            {winners.length > 0 && (
                <ul>
                    {winners.map(winner => (
                        <li key={winner.id}>{winner.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ElectionWinner;
