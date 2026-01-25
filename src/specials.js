import React from 'react';
import {specials} from './specials-data';
import {useNavigate } from 'react-router';
import SpecialsCard from './specials-card';
export default function Specials() {
  const navigate = useNavigate();
  return (
    <section className="specials-section">
      <div className='specials-header'>
        <h2>This weeks specials!</h2>
        <button onClick={()=> navigate("/menu") && window.scrollTo(0, 0)}>Online Menu</button>
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