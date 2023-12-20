import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar';

const Home: React.FC = () => {
  return (
    <>
      <div className="hero-bg">
        <Navbar />
        <div className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Sortify</h1>
            <h3 className='hero-desc'>Video Organizer Hub</h3>
          </div>
          <div className="hero-media">
            <p>this is an img.</p>
          </div>
        </div>
      </div>

      <div className="content-bg">
        <div className="content">
          <h1>How it works</h1>
          <ol className="feature-steps">
            <li>Log in with your Google account</li>
            <li>Link your TikTok, Instagram, and/or YouTube</li>
            <li>Search through all of your saved content</li>
          </ol>
        </div>
      </div>

      <div className="footer-bg">
        <div className="footer">
          Made by BAZINGA
        </div>
      </div>
    </>
  );
};

export default Home;
