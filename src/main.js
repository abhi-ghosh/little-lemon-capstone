import React from 'react';
import Hero from './hero';
import Specials from './specials';
import RatingCard from './rating-card';
export default function Main() {
  return (
    <main>
      <Hero/>
      <Specials/>
      <RatingCard/>
    </main>
  );
}