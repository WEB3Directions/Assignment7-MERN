import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    
    const isUsernameValid = username.trim() !== '';
    const isPasswordValid = password.trim() !== '';

    setIsFormValid(isUsernameValid && isPasswordValid);
  };

  const handleLogin = () => {
    if (isFormValid) {
      
      console.log(`Logging in with username: ${username} and password: ${password}`);
      history.push('/LoginPage'); // Redirect to the login page
    } else {
      document.write('Please enter valid username and password.');
    }
  };

  const containerStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '300px',
    margin: 'auto', // Center the container
    marginTop: '50px', // Adjust the top margin as needed
  };

  const buttonStyle = {
    backgroundColor: isFormValid ? '#007bff' : '#ccc', // Change color based on form validity
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: isFormValid ? 'pointer' : 'not-allowed',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Login</h2>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '8px', color: '#555' }}>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} onBlur={validateForm} />
        </label>
        <label style={{ marginBottom: '8px', color: '#555' }}>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={validateForm} />
        </label>
      </form>
      <div style={{ textAlign: 'center' }}>
        <Link to="/LoginPage" style={linkStyle}>
          <button style={buttonStyle} type="button" onClick={handleLogin} disabled={!isFormValid}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
