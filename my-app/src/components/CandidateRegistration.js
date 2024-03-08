import React, { useState, useEffect } from 'react';
import '../styles/CandidateRegistration.css';
import axios from 'axios';

function CandidateRegistration() {
    const [name, setName] = useState('');
    const [party, setParty] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [education, setEducation] = useState('');
    const [elections, setElections] = useState([]);
    const [selectedElectionId, setSelectedElectionId] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/election/upcoming');
                if (!response.ok) {
                    throw new Error('Failed to fetch upcoming elections');
                }
                const data = await response.json();
                setElections(data);
                if (data.length > 0) {
                    setSelectedElectionId(data[0].id);
                }
            } catch (error) {
                console.error('Error fetching upcoming elections:', error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', image);
        formData.append('name', name);
        formData.append('party', party);
        formData.append('email', email);
        formData.append('age', age);
        formData.append('gender', gender);
        formData.append('education', education);

        try {
            const response = await axios.post(`http://localhost:8080/api/candidate/register/${selectedElectionId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                console.log('Candidate registered successfully');
            } else {
                console.error('Candidate registration failed');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <center>
            <div className="registration-container">
                <h2>Candidate Registration</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    <input type="text" value={party} onChange={(e) => setParty(e.target.value)} placeholder="Party" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
                    <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" />
                    <input type="text" value={education} onChange={(e) => setEducation(e.target.value)} placeholder="Education" />
                    <select value={selectedElectionId} onChange={(e) => setSelectedElectionId(e.target.value)}>
                        {elections.map(election => (
                            <option key={election.id} value={election.id}>{election.title}</option>
                        ))}
                    </select>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    <button type="submit">Register</button>
                </form>
            </div>
        </center>
    );
}

export default CandidateRegistration;
