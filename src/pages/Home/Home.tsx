// In Home.tsx
import React from 'react';
import './Home.css'; 

const Home: React.FC = () => {
  return (
    <div className="background">
      <h1 className="heroTitle">Sortify</h1>
      <h3 className='heroDesc'>Video Organizer Hub</h3>
    </div>
  );
};

export default Home;
