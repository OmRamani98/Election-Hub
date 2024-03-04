
import React, { useState } from 'react';
import axios from 'axios';

function AdminRegistration () {
  const [admin, setAdmin] = useState({ id: '', password: '' });
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
      setAdmin({ id: '', password: '' });
    } catch (error) {
      setMessage('Registration failed');
    }
  };

  return (
    <div>
      <h2>Admin Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" name="id" value={admin.id} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={admin.password} onChange={handleChange} />
        </label>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AdminRegistration;
