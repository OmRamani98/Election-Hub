import React, { useState, useEffect } from 'react';
import '../styles/Result.css'; // Import CSS file

function ElectionWinner() {
    const [winners, setWinners] = useState([]);
    const [error, setError] = useState('');
    const electionId= sessionStorage.getItem("electionCompletedId");

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

    useEffect(() => {
        getWinner(); // Call getWinner when component mounts
    }, []);

    return (
        <div className="election-winner-container">
            <h1 className="election-winner-title">Election Winner</h1>
            {error && <p className="election-winner-message">{error}</p>}
            
            {winners.length === 0 && <p className="election-winner-message">No winners found.</p>}
            {winners.length > 1 && <p className="election-winner-message">It's a tie! Multiple winners.</p>}
            {winners.length > 0 && (
                <ul className="winner-list">
                    {winners.map(winner => (
                        <li key={winner.id} className="winner-item">
                            <img src={`data:image/png;base64,${winner.image}`} alt={winner.name} className="winner-image" />
                            <p className="winner-details">
                                <span className="winner-name">{winner.name}</span>( <span className="winner-party">{winner.party} )</span>
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ElectionWinner;
