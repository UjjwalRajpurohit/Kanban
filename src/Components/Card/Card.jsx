import React from 'react';
import './Card.css';

const Card = ({ id, title, profile, feature }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <span className="card-id">{id}</span>
        <img 
          src={profile} 
          alt="profile" 
          className="profile-pic" 
        />
      </div>
      <h2 className="card-title">{title}</h2>
      <div className="card-footer">
        <span className="icon-box">!</span>
        <span className="feature-request">{feature}</span>
      </div>
    </div>
  );
};

export default Card;
