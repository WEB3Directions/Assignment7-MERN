// Home.js
import React from 'react';
import SignUp from './SignUp';
import Login from './Login';


const Home = () => {
  return (
    <div>
      <h1>Register to New Site</h1>
      <p>Explore and discover amazing things.</p>
      <SignUp />
      <Login />
   
    </div>
  );
};

export default Home;
