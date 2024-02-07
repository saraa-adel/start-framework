import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return <>
     <div className="b-bg-color pt-4 pb-5 px-5 position-relative">
        <div className='container py-5 my-3 text-white'>
        <div className="row mb-5 gy-5 align-items-start">
          <div className="col-sm-4 text-center">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-sm-4 text-center">
            <h3>AROUND THE WEB</h3>
            <span className='text-center'>
            <i className="fa-brands fa-facebook p-2 mx-1 border rounded-circle"></i>
            <i className="fa-brands fa-twitter p-2 mx-1 border rounded-circle"></i>
            <i className="fa-brands fa-linkedin-in p-2 mx-1 border rounded-circle"></i>
            <i className="fa-solid fa-globe p-2 mx-1 border rounded-circle"></i>
            </span>
          </div>
          <div className="col-sm-4 text-center">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
        </div>
        <div className='db-bg-color text-white text-center position-absolute py-4 start-0 end-0 bottom-0'>Copyright © Your Website 2021</div>
     </div>
  </>
}
