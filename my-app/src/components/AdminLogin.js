import React, { useState } from 'react';
import axios from 'axios';

function AdminLogin() {
  const [admin, setAdmin] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(admin);
      const response = await axios.post('http://localhost:8080/api/admin/login', admin);
      sessionStorage.setItem("adminusername",admin.username);
      setMessage(response.data);
      window.location.href = '/admin'
    } catch (error) {
      setMessage('Authentication failed');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
        User Name:
          <input type="text" name="username" value={admin.username} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={admin.password} onChange={handleChange} />
        </label>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AdminLogin;
