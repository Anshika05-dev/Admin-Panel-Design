import React from 'react';
import './styles/Salons.css';
import SalonSection from './SalonSection';
import salon from './assets/salon.jpg'

const salonsData = {
  recommended: [
    {
      name: 'Hittin 30 Degrees Barbershop',
      rating: 4.9,
      reviews: 4089,
      location: 'Hittin, Riyadh',
      type: 'Barbershop',
      image: salon
    },
    {
      name: 'Beauty Loft Salon Fz Lcc',
      rating: 4.9,
      reviews: 459,
      location: 'Al Barsha South, Dubai',
      type: 'Beauty Salon',
      image: salon
    },
    {
      name: 'Kioko Nail Spa',
      rating: 4.9,
      reviews: 209,
      location: 'An Narjis, Riyadh',
      type: 'Nail Salon',
      image: salon
    },
    {
      name: 'Fayzacenter',
      rating: 4.6,
      reviews: 139,
      location: 'Al Hamra, Riyadh',
      type: 'Hair Salon',
      image: salon
    },
  ],
  new: [
    {
      name: 'The Mani Pedi Spa, AIPL Joy Street',
      rating: 5.0,
      reviews: 7,
      location: 'Sector 66, Gurugram',
      type: 'Nail Salon',
      image: salon
    },
    {
      name: 'Blue Tree Spa',
      rating: 5.0,
      reviews: 3,
      location: 'Indirapuram, Ghaziabad',
      type: 'Massage',
      image: salon
    },
    {
      name: 'Arealyou Premium Salon',
      rating: 4.6,
      reviews: 53,
      location: 'Udaipur',
      type: 'Hair Salon',
      image:salon
    },
    {
      name: 'The Next Level Salon',
      rating: 5.0,
      reviews: 3,
      location: 'Lalitpur',
      type: 'Hair Salon',
      image: salon
    },
  ],
};


export default function Salons() {
  return (
    <div className="salon-container">
      <SalonSection title="Owned" salons={salonsData.recommended} />
      <SalonSection title="More To View" salons={salonsData.new} />
    </div>
  );
}
