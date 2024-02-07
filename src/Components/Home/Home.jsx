import React, { useEffect } from 'react'
import style from './Home.module.css'
import img from '../../Assets/avataaars.svg'

export default function Home() {

  useEffect(() => {document.title = "Home"}, 
 []);
  
  return <>
    <div className='home text-white h-page g-bg-color d-flex'>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <img className={`${style.manImg} mt-3 mb-4`} src={img} alt="man" />
        <h2 className='fs-1 fw-bolder m-0 p-0 pt-3'>START FRAMEWORK</h2>
        <div className='star position-relative py-2 d-flex align-items-center'>
        <i className="fa-solid fa-star d-flex align-items-center my-2"></i>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  </>
}
