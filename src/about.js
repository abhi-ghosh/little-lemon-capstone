import React from 'react'
import Mario1 from './assets/Mario and Adrian A.jpg'
import Mario2 from './assets/Mario and Adrian b.jpg'
export default function About() {
  return (
    <div className='about'>
      <div className='about-left'>
        <div className='abouthead'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
        </div>
        <p className='aboutpara'>
          Little Lemon is a family-owned Mediterranean restaurant in the heart of Chicago,
          offering a warm and inviting dining experience. Led by chefs Mario and Adrian,
          our kitchen blends tradition and innovation. Mario brings classical training,
          while Adrian adds a modern twist. Together, they create authentic yet contemporary
          Mediterranean dishes that make Little Lemon a standout destination in the city.
        </p>
      </div>
      <div className="mariowario">
        <img className='mario1' src={Mario1} alt="Mario and Adrian"/>
        <img className='mario2' src={Mario2} alt='Mario and Adrian'/>
      </div>
    </div>
  )
}