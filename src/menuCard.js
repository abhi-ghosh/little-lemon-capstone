import React from 'react';
export default function MenuCard({ item }) {
  return (
    <div key={item.id} className="menu-item-card">
      <div className="image-container">
        <img className="menu-item-image" src={item.image} alt={item.name} />
      </div>
      <h3 className='menu-item-name'>{item.name}</h3>
      <p className='menu-item-description'>{item.description}</p>
      <div className="menu-item-details">
        <p>${item.price.toFixed(2)}</p>
        <p>{item.calories} cal</p>
      </div>
    </div>
  );
}
