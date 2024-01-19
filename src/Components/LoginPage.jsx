import React from 'react';
import { Link } from 'react-router-dom';

const NewPage = () => {
  return (
    <div style={containerStyle}>
      <h1 style={welcomeMessageStyle}>Welcome to our website!</h1>
      <p style={descriptionStyle}>Explore and discover amazing things.</p>

      <Link to="/" style={linkStyle}>
        <button style={buttonStyle}>Go to Home Page</button>
      </Link>
    </div>
  );
};

export default NewPage;

// Inline CSS Styles
const containerStyle = {
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  width: '300px',
  margin: 'auto',
  marginTop: '50px',
};

const welcomeMessageStyle = {
  color: '#333',
  fontSize: '24px',
  marginBottom: '16px',
};

const descriptionStyle = {
  color: '#555',
  marginBottom: '24px',
};

const linkStyle = {
  textDecoration: 'none',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const buttonHoverStyle = {
  backgroundColor: '#0056b3',
};

const disabledButtonStyle = {
  backgroundColor: '#ccc',
  cursor: 'not-allowed',
};

