import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import Socials from './Socials';



const header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'M</h5>
        <h1>Mohammed-Tabish Shabir</h1>
        <h5 className='text-light'>
          Front End Developer
        </h5>
        <CTA></CTA>

      <Socials></Socials>

        <div className="me">
          <img src='images/me.png' alt="" />
        </div>

      </div>

    </header>
  )
}

export default header
