import React, { useEffect, useState } from 'react';
import style from './Navbar.module.css';
import { Link, useLocation } from 'react-router-dom';
import $ from 'jquery';

export default function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    $(window).scroll(function () {
      if ($(this).scrollTop() >30) {
        $('.navbar').css('padding','8px 0px')
      } else {
        $('.navbar').css('padding','24px 0px')
      }
    });
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    // console.log(currentPath);
    setActiveLink(currentPath);
  }, [location]);

  return (
    <>
      <div className='empty py-4 my-4'></div>
      <nav className={`navbar navbar-expand-lg b-bg-color fixed-top ${style.navbar}`}>
        <div className="container">
          <Link className="navbar-brand text-white fs-2 fw-bolder" to={"/"}>START FRAMEWORK</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item py-3 pe-3">
                <Link className={`navLink py-2 rounded-3 text-white px-2 ${activeLink === '/about' ? 'active' : ''}`} to={"/about"}>ABOUT</Link>
              </li>
              <li className="nav-item py-3 pe-3">
                <Link className={`navLink py-2 rounded-3 text-white px-2 ${activeLink === '/portfolio' ? 'active' : ''}`} to={"/portfolio"}>PORTFOLIO</Link>
              </li>
              <li className="nav-item py-3 pe-3">
                <Link className={`navLink py-2 rounded-3 text-white px-2 ${activeLink === '/contact' ? 'active' : ''}`} to={"/contact"}>CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
