import React, { useState } from 'react';
import axios from 'axios';
import '../styles/VoterLogin.css'; 

function AdminRegistration() {
  const [admin, setAdmin] = useState({ username: '', password: '', email: '', firstName: '', lastName: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/admin/registration', admin);
      setMessage(response.data);
      // Optionally, you can clear the form fields after successful registration
      setAdmin({ username: '', password: '', email: '', firstName: '', lastName: '' });
      window.location.href = '/admin-login';
    } catch (error) {
      setMessage('Registration failed');
    }
  };

  return (
    <center>
      <div className="login-container">
        <h2>Admin Registration</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" value={admin.username} onChange={handleChange} placeholder="User Name" />
          <input type="password" name="password" value={admin.password} onChange={handleChange} placeholder="Password" />
          <input type="email" name="email" value={admin.email} onChange={handleChange} placeholder="Email" />
          <input type="text" name="firstName" value={admin.firstName} onChange={handleChange} placeholder="First Name" />
          <input type="text" name="lastName" value={admin.lastName} onChange={handleChange} placeholder="Last Name" />
          <button type="submit">Register</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </center>
  );
}

export default AdminRegistration;
