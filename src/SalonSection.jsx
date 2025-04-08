import React from 'react'
import SalonCard from './SalonCard';

const SalonSection = ({ title, salons }) => (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <div className="salon-list">
        {salons.map((salon, index) => (
          <SalonCard key={index} salon={salon} />
        ))}
      </div>
    </div>
  );

export default SalonSection