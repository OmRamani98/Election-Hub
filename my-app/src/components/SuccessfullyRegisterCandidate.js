import React from 'react';
import { Link } from 'react-router-dom';

const SuccessfullyVoted = () => {
  return (
    <center>
    <div style={{  marginTop: '50px',padding:'5vh', width:'fit-content',background:'white',textAlign: 'center',borderRadius:'14%',border:'3px solid rgb(28, 71, 109)'}}>
       <h2 style={{ color: 'green' }}>Thank you for registration !</h2>
      <p>Your registration has been successfully submitted.</p>
      <Link to="/candidate-registration" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', fontSize: '18px' }}>Go Back to Registration</Link>
    </div>
    </center>
  );
};

export default SuccessfullyVoted;
