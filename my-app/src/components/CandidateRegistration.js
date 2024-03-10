import React, { useState, useEffect } from 'react';
import '../styles/VoterLogin.css'; 
import axios from 'axios';


function CandidateRegistration() {
    const [name, setName] = useState('');
    const [party, setParty] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [education, setEducation] = useState('');
    
    const [image, setImage] = useState(null);

    const selectedElectionId=sessionStorage.getItem("electionUpcomingId");
    
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
                window.location.href = '/successfully-register-candidate';
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
            
           <div className="login-container">
                <h2>Candidate Registration</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    <input type="text" value={party} onChange={(e) => setParty(e.target.value)} placeholder="Party" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
                    <input type="text" value={education} onChange={(e) => setEducation(e.target.value)} placeholder="Education" />
                    
                     <div style={{display:'flex'}}>
                        <label style={{display:'flex',margin:"1vw",color:"white"}}>
                            <input  type="radio" value="Male" checked={gender === "Male" } onChange={(e) => setGender(e.target.value)}  />
                             Male
                        </label>
                        <label style={{display:'flex',margin:"1vw",color:"white"}} >
                            <input type="radio" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} />
                             Female
                        </label>
                        <label style={{display:'flex',margin:"1vw",color:"white"}}>
                            <input type="radio" value="Other" checked={gender === "Other"} onChange={(e) => setGender(e.target.value)} />
                             Other
                        </label>
                    </div>
                    
                    <input  style={{background:"white"}} type="file" accept="image/*" onChange={handleImageChange} />
                    <button type="submit">Register</button>
                </form>
            </div>
        </center>
    );
}

export default CandidateRegistration;
