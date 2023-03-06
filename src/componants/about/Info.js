import React from 'react'
import { BsAward,BsBriefcase } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
const Info = () => {
  return (
  <>
  <div className='about__info grid'>
    <div className='about__box'>
        <BsAward className='about__icon'/>
        <h3 className='about__title'>Experience</h3>
        <span className='about__subtitle'>More than 6Projets</span>
    </div>
  
    <div className='about__box'>
        <BsBriefcase className='about__icon'/>
        <h3 className='about__title'>Completed</h3>
        <span className='about__subtitle'>18 + Projects</span>
    </div>
    <div className='about__box'>
        <BiSupport className='about__icon'/>
        <h3 className='about__title'>Support</h3>
        <span className='about__subtitle'>Anytime</span>
    </div>
  </div>
  </>
  )
}

export default Info