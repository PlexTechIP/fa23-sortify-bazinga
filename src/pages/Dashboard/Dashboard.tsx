import React from 'react';
import icon from './icon.jpg'
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dash">
        <h1>Linked Accounts</h1>
        <div className="tiktok">
            <img src={icon} alt=""/>
            <div className="box">deactivate</div>
        </div>
        <div className="inst">
            <img src={icon} alt=""/>
            <div className="box">activate</div>
        </div>
        <div className="plus">+</div>
    </div>
  );
}

export default Dashboard;
