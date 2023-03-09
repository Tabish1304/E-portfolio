import React from 'react'
import './experience.css'
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {SiJavascript} from "react-icons/si"
import {DiReact} from "react-icons/di"
import {BsFillBootstrapFill} from "react-icons/bs"
import {SiTailwindcss} from "react-icons/si"










const experience = () => {
  return (
    <section id='experience'>
      <div className="titles">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      </div>
      <div className=" container experience-container">
        <div className="frontend">
          <h3>Frontend Developer</h3>
          <div className="experience-content">

            <article className='experience-deatils'><AiFillHtml5 className='experience-icon'></AiFillHtml5>
            <div>
            <h4>HTML</h4>
            </div>
            </article>

            <article className='experience-deatils'><DiCss3 className='experience-icon'></DiCss3>
            <div>
            <h4>CSS</h4>
            </div>
            </article>


            <article className='experience-deatils'><SiJavascript className='experience-icon'></SiJavascript>
            <div>
            <h4>Javascript</h4>
            </div>
            </article>


            <article className='experience-deatils'><DiReact className='experience-icon'></DiReact>
            <div>
            <h4>React</h4>
            </div>
            </article>


            <article className='experience-deatils'><BsFillBootstrapFill className='experience-icon'></BsFillBootstrapFill>
            <div>
            <h4>Tailwind</h4>
            </div>
            </article>


            <article className='experience-deatils'><SiTailwindcss className='experience-icon'></SiTailwindcss>
            <div>
            <h4>Bootstrap</h4>
            </div>
            </article>



          </div>
        </div>

      </div>
    </section>
  )
}

export default experience
