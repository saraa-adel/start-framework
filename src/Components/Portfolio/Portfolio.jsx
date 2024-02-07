import React, { useEffect } from 'react'
import $ from 'jquery'
import style from './Portfolio.module.css'
import img1 from '../../Assets/poert1.png'
import img2 from '../../Assets/port2.png'
import img3 from '../../Assets/port3.png'
export default function Portfolio() {

  useEffect(() => {
      document.title = "Portfolio"

      $('.card').on('click', function() {
        let imagePort = $(this).find('img').attr('src')
        // console.log(imagePort)
        $('.overlay img').attr('src', imagePort)
        $('.overlay').removeClass('d-none')
        $('.overlay').on('click', function(event) {
          if (!$(event.target).is('img')) {
            $(this).addClass('d-none');
          }
        });
      })
    }, [])

  return <>
    <div className='portfolio position-relative h-page b-text-color d-flex'>
      <div className={`${style.imgLayer} overlay d-flex justify-content-center align-items-center d-none`}>
        <img src="" className={`${style.w40} over-img mx-auto`} alt="" />
      </div>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h2 className='fs-1 fw-bolder m-0 p-0 pt-5'>PORTFOLIO COMPONENT</h2>
        <div className={`${style.star} py-2 d-flex justify-content-center align-items-center`}>
        <i className="fa-solid fa-star d-flex align-items-center my-2"></i>
        </div>
        <div className="row g-5 pb-4">
          <div className="col-lg-4 col-md-6 col-sm-12">
          <div className='position-relative card'>
          <div className={`${style.layer} rounded-3 d-flex align-items-center justify-content-center`}>
          <i className={`fa-solid fa-plus text-white ${style.font96}`}></i>
          </div>
            <img src={img1} className='w-100 rounded-3' alt="" />
        </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <div className='position-relative card'>
          <div className={` ${style.layer} rounded-3 d-flex align-items-center justify-content-center`}>
          <i className={`fa-solid fa-plus text-white ${style.font96}`}></i>
          </div>
            <img src={img2} className='w-100 rounded-3' alt="" />
        </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <div className='position-relative card'>
          <div className={` ${style.layer} rounded-3 d-flex align-items-center justify-content-center`}>
          <i className={`fa-solid fa-plus text-white ${style.font96}`}></i>
          </div>
            <img src={img3} className='w-100 rounded-3' alt="" />
        </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <div className='position-relative card'>
          <div className={` ${style.layer} rounded-3 d-flex align-items-center justify-content-center`}>
          <i className={`fa-solid fa-plus text-white ${style.font96}`}></i>
          </div>
            <img src={img1} className='w-100 rounded-3' alt="" />
        </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <div className='position-relative card'>
          <div className={` ${style.layer} rounded-3 d-flex align-items-center justify-content-center`}>
          <i className={`fa-solid fa-plus text-white ${style.font96}`}></i>
          </div>
            <img src={img2} className='w-100 rounded-3' alt="" />
        </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <div className='position-relative card'>
          <div className={` ${style.layer} rounded-3 d-flex align-items-center justify-content-center`}>
          <i className={`fa-solid fa-plus text-white ${style.font96}`}></i>
          </div>
            <img src={img3} className='w-100 rounded-3' alt="" />
        </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
