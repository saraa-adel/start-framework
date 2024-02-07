import React, { useEffect } from 'react'
import style from './About.module.css'

export default function About() {
  useEffect(() => {document.title = "About"}, 
  []);
  return <>
     <div className='about text-white h-page g-bg-color d-flex align-items-center'>
      <div className="container px-5 mt-4 d-flex flex-column align-items-center justify-content-center">
        <h2 className='fs-1 fw-bolder m-0 p-0'>ABOUT COMPONENT</h2>
        <div className='star position-relative py-2 d-flex align-items-center'>
        <i className="fa-solid fa-star d-flex align-items-center my-2"></i>
        </div>
        <div className="row px-5">
          <div className="col-sm-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-sm-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </div>
  </>
}
