import React from 'react'
import "./Nav.css" 
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiMessage3Line} from "react-icons/ri";
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav("#")}  className={activeNav === "#" ? "active":""}><AiOutlineHome></AiOutlineHome></a>

      <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "active":""}><AiOutlineUser></AiOutlineUser></a>

      <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience" ? "active":""}  ><BiBook></BiBook></a>

      
      <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "active":""} ><RiMessage3Line></RiMessage3Line></a>


    </nav> 
  )
}

export default Nav
