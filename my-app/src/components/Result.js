import React, { useState, useEffect } from 'react';
import '../styles/Result.css'; // Import CSS file
import { Link } from 'react-router-dom';
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
                <div className="winner-list" style={{borderRadius:'14%',border:'3px solid rgb(28, 71, 109)'}}>
                    {winners.map(winner => (
                        <center><div key={winner.id} className="winner-item">
                            <img src={`data:image/png;base64,${winner.image}`} alt={winner.name} className="winner-image" />
                            <p className="winner-details">
                                <h3 className="winner-name"> Name :{winner.name}</h3>
                                <p className="winner-party"> Party :{winner.party} </p>  
                            </p>
                             </div></center>

                    ))}
                </div>
            )}
            <Link to="/completed-election" style={{ background:'white',padding:'1vh',borderRadius:'1vh',textDecoration: 'none', color: 'blue', fontWeight: 'bold', fontSize: '18px' }}>Go Back to View Result</Link>
        </div>
    );
}

export default ElectionWinner;
