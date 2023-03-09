import React from 'react'
import './about.css'
import {FaAward} from "react-icons/fa";

const about = () => {
  return (
    <section id='about'>

      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
      <img src="images/me-about.jpg" alt="" />
      </div>

      
        </div>


        

        <div className="about-content">
      <div className="about-cards">
         <article className='about-card'>
         <FaAward className='about-icon'></FaAward>
          <h5>Experience</h5>
          <p> 1 Year Non-Job Experience</p>
         </article>

         <article className='about-card'>
         <FaAward className='about-icon'></FaAward>
          <h5>Passion</h5>
          <p>Coding And Gaming</p>
         </article>


         <article className='about-card'>
         <FaAward className='about-icon'></FaAward>
          <h5>Qualifications</h5>
          <p>GCSE: <br />Maths:5 <br /> English Lang: 5 <br /> IT:D* <br />BTEC Level 3 Extended Diploma : <br /> IT: D* D D </p>
         </article>

      </div>
       
          {/* <a href="#contact" className='btn btn-primary'>Lets Talk</a> */}
        </div>
      </div>

      <div className="info">
        <p>I am A 18 Years Old With A Passion On Becoming A Front End Developer And Eager To Gain Expereince, Face Challanges And Learn More . I Have Been Self Teaching My Self For 1 Year. I Currently Live In London. During my Free Time I Love To Play Video Games With My Friends And Also Watch And Play Sports </p>
        </div>
    </section>
  )
}

export default about
