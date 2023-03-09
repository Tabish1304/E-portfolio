import React from 'react'
import './portfolio.css'
import {AiFillGithub} from "react-icons/ai";
// import IMG1 from '..//..//portfolio1.jpg'


const data = [
{

id:1,
image:<img src="images/me.png" />,
title:'idkdkdkdkd',
github: 'https://github.com' ,
demo:'https://google.com'

},


  {

    id:2,
    // img:IMG1,
    title:'idkdkdkdkd',
    github: 'https://github.com' ,
    demo:'https://google.com'
    
    },
    {

      id:3,
      Image:1,
      title:'idkdkdkdkd',
      github: 'https://github.com' ,
      demo:'https://google.com'
      
      },
      {

        id:4,
        Image:1,
        title:'idkdkdkdkd',
        github: 'https://github.com' ,
        demo:'https://google.com'
        
        },
        {

          id:5,
          Image:1,
          title:'idkdkdkdkd',
          github: 'https://github.com' ,
          demo:'https://google.com'
          
          },


          {

            id:6,
            Image:1,
            title:'idkdkdkdkd',
            github: 'https://github.com' ,
            demo:'https://google.com'
            
            },


]


const portfolio = () => {
  return (
    <section id='portfolio'>
      <div className="protfolio-title">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      </div>
      
      <div className="contianer portfolio-container">

        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className='portfolio-item'>
        <div className="portfolio-img">
          {/* <img src="images/portfolio2.jpg" alt="" /> */}
          <img src="image" alt="" />
        </div>
        <h3>{title}</h3>
        <div className="portfolio-links">
        <a className='btn' href ={github}target="_blank">GitHub</a>
        <a className='btn btn-primary' href ={demo}target="_blank">Live Demo</a>
        </div>
        </article> 

            )
          })
        }




         {/* <article className='portfolio-item'>
        <div className="portfolio-img">
          <img src="images/portfolio2.jpg" alt="" />
        </div>
        <h3>This is a portiflio item title</h3>
        <div className="portfolio-links">
        <a className='btn' href ="https://github.com"target="_blank">GitHub</a>
        <a className='btn btn-primary' href ="https://google.com"target="_blank">Live Demo</a>
        </div>
        </article>  */}

        {/* <article className='portfolio-item'>
        <div className="portfolio-img">
          <img src="images/portfolio3.jpg" alt="" />
        </div>
        <h3>This is a portiflio item title</h3>
        <div className="portfolio-links">
        <a className='btn' href ="https://github.com"target="_blank">GitHub</a>
        <a className='btn btn-primary' href ="https://google.com"target="_blank">Live Demo</a>
        </div>
        </article> 

        <article className='portfolio-item'>
        <div className="portfolio-img">
          <img src="images/portfolio4.jpg" alt="" />
        </div>
        <h3>This is a portiflio item title</h3>
        <div className="portfolio-links">
        <a className='btn' href ="https://github.com"target="_blank">GitHub</a>
        <a className='btn btn-primary' href ="https://google.com"target="_blank">Live Demo</a>
        </div>
        </article> 

        <article className='portfolio-item'>
        <div className="portfolio-img">
          <img src="images/portfolio5.png" alt="" />
        </div>
        <h3>This is a portiflio item title</h3>
        <div className="portfolio-links">
        <a className='btn' href ="https://github.com"target="_blank">GitHub</a>
        <a className='btn btn-primary' href ="https://google.com"target="_blank">Live Demo</a>
        </div>
        </article> 

        <article className='portfolio-item'>
        <div className="portfolio-img">
          <img src="images/portfolio6.jpg" alt="" />
        </div>
        <h3>This is a portiflio item title</h3>
        <div className="portfolio-links">
        <a className='btn' href ="https://github.com"target="_blank">GitHub</a>
        <a className='btn btn-primary' href ="https://google.com"target="_blank">Live Demo</a>
        </div>
        </article>  */} 

       

      </div>

    </section>
  )
}

export default portfolio
