import React from 'react';
import './landingPage.css';
import Header from 'src/components/Header';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className='LandingPageMain'>
        <h1>LandingPage</h1>
      </div>
    </>
  );
}

export default LandingPage;