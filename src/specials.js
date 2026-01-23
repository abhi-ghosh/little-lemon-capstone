import React from 'react';
import {specials} from './specials-data';
import { Link, useNavigate } from 'react-router';
import SpecialsCard from './specials-card';
export default function Specials() {
  const navigate = useNavigate();
  return (
    <section className="specials-section">
      <div className='specials-header'>
        <h2>This weeks specials!</h2>
        <button onClick={()=> navigate("/menu")}>Online Menu</button>
      </div>
        {specials.map((special, index) => {
          return (
            <SpecialsCard
              key={index}
              title={special.title}
              price={`$${special.price.toFixed(2)}`}
              description={special.description}
              image={special.image}
            />
          )
        })}
    </section>
  );
}