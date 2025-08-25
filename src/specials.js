import React from 'react';
import {specials} from './specials-data';
import SpecialsCard from './specials-card';
export default function Specials() {
  return (
    <section className="specials-section">
      <div className='specials-header'>
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
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