import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const isUsernameValid = username.trim() !== '';
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    const isPasswordValid = password.length >= 6;

    setIsFormValid(isUsernameValid && isEmailValid && isPasswordValid);
  };

  const handleSignUp = () => {
    if (isFormValid) {
      // Perform signup logic here
      history.push('/LoginPage');
      console.log(`Signing up with username: ${username}, email: ${email}, and password: ${password}`);
    } else {
      console.log('Please enter valid information before signing up.');
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Sign Up</h2>
      <form style={formStyle}>
        <label style={labelStyle}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={validateForm}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateForm}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validateForm}
            style={inputStyle}
          />
        </label>
        <br />
      </form>

      <div style={buttonContainerStyle}>
        <Link to="/LoginPage">
          <button type="button" onClick={handleSignUp} disabled={!isFormValid} style={buttonStyle}>
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

// CSS Styles
const containerStyle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  width: '300px',
  margin: 'auto',
  marginTop: '50px',
};

const headingStyle = {
  textAlign: 'center',
  color: '#333',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  marginBottom: '8px',
  color: '#555',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginBottom: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonContainerStyle = {
  textAlign: 'center',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const disabledButtonStyle = {
  backgroundColor: '#ccc',
  cursor: 'not-allowed',
};

const hoverButtonStyle = {
  backgroundColor: '#0056b3',
};

