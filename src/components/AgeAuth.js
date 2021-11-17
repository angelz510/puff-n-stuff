import React, { useState } from 'react';
import './AgeAuth.css';
import Logo from '../assets/puff-logo-transparent.png';

const AgeAuth = props => {
  const [no, setNo] = useState(false);

  return (
    <div className='auth-container'>
      <div className='no-auth'>
      <div className='logo-container'>
        <img src={Logo} className='age-logo' alt="Puff N' Stuff" />
        By clicking "yes", I verify that I am at least 21 years of age.
      </div>
      <div className='btn-container'>
        <button className='btn' onClick={() => props.setIsAuth(true)}>
          Yes
        </button>
        <button className='btn' onClick={() => setNo(true)}>
          No
        </button>
      </div>
        {!no ? null : (
          <div>Sorry, you must be at least 21 years of age to enter.</div>
        )}
      </div>
    </div>
  );
};

export default AgeAuth;
