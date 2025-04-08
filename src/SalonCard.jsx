

import React from 'react';
import { useNavigate } from 'react-router-dom';

const SalonCard = ({ salon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services"); 
    // navigate(`/salon/${salon.id}`); 
  };

  return (
    <div className="salon-card" onClick={handleClick}>
      <img src={salon.image} alt={salon.name} className="salon-image" />
      <div className="salon-info">
        <h3>{salon.name}</h3>
        <p className="rating">⭐ {salon.rating} <span className="reviews">({salon.reviews})</span></p>
        <p className="location">{salon.location}</p>
        <span className="type">{salon.type}</span>
      </div>
    </div>
  );
};

export default SalonCard;
