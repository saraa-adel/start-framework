import React, { useEffect, useState } from 'react'
import style from './Contact.module.css'
import $ from 'jquery'

export default function Contact() {

  const [isPlaceholderShown, setIsPlaceholderShown] = useState(true);

  const handleInputChange = (event) => {
    const label = $(event.target).siblings('label')

    if (event.target.value === '') {
      setIsPlaceholderShown(true);
      console.log('hello');
      label.addClass('labelNotShow')
      label.removeClass('labelShow')
    } else {
      setIsPlaceholderShown(false);
      console.log('bye');
      label.removeClass('labelNotShow')
      label.addClass('labelShow')
    }
  };
  
  useEffect(() => {
    document.title = "Contact"
},[]);
  return <>
      <div className='portfolio position-relative h-page b-text-color d-flex'>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h2 className='fs-1 fw-bolder m-0 p-0 pt-4 mt-2'>CONTACT SECTION</h2>
        <div className={`${style.star} py-2 d-flex justify-content-center align-items-center`}>
        <i className="fa-solid fa-star d-flex align-items-center my-2"></i>
        </div>
        <div className={`${style.w60} mx-auto row gx-4 gy-5 mt-5`}>
          <div className="col-12 mt-4">
            <div className='position-relative'>
              <label htmlFor='name' className='labelNotShow g-text-color pb-3 position-absolute'>userName :</label>
            <input type="text" id='name' name="" placeholder='userName' onChange={handleInputChange} className={`form-control border-0 pb-3 border-bottom ${style.borderColor}`} />
            </div>
          </div>
          <div className="col-12">
          <div className='position-relative'>
          <label htmlFor='age' className='labelNotShow g-text-color pb-3 position-absolute'>userAge :</label>
          <input type="number" id='age' name="" onChange={handleInputChange} placeholder='userAge' className={`form-control border-0 pb-3 border-bottom ${style.borderColor}`} />
          </div>
          </div>
          <div className="col-12">
            <div className='position-relative'>
            <label htmlFor='email' className='labelNotShow g-text-color pb-3 position-absolute'>userEmail :</label>
            <input type="email" id='email' name="" onChange={handleInputChange} placeholder='userEmail' className={`form-control border-0 pb-3 border-bottom ${style.borderColor}`} />
            </div>
          </div> 
          <div className="col-12">
            <div className='position-relative'>
            <label htmlFor='pass'  className='labelNotShow g-text-color pb-3 position-absolute'>userPassword :</label>
            <input type="password" id='pass' name="" onChange={handleInputChange} placeholder='userPassword' className={`form-control border-0 pb-3 border-bottom ${style.borderColor}`} />
            </div>
          </div>
          <div className='mt-4'>
          <button type='button' className='btn text-white py-1 px-2 g-bg-color mb-5'>send Message</button>
          </div>
        </div>
      </div>
    </div>
  </>
}
