'use client'

import React from 'react'
import '../assets/styles/header.css';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className='header__desktop'>
        <figure className='header__desktop--logo'>
            <img src="images/_2834812530736.png" alt='logo'/>
        </figure>

        <nav className='header__desktop--nav'>
          <ul>
            <li className='header__text header__desktop--agency_pos'><h1>Агенство</h1></li>
            <li className='header__text header__desktop--services_pos'><h1>Услуги</h1></li>
            <li className='header__text header__desktop--cases_pos'><Link href='/cases'><h1>Кейсы</h1></Link></li>
            <li className='header__text header__desktop--blog_pos'><h1>Блог</h1></li>
            <li className='header__text header__desktop--contacts_pos'><h1>Контакты</h1></li>
          </ul>      
        </nav>
    </div>

    <div className='header__mobile'>
        <figure className='header__mobile--logo'>
            <img src="images/_2834812530736.png" alt='logo'/>
        </figure>

        <figure className='header__mobile--burger' onClick={() => setIsMobileMenuOpen(true)} style={{cursor: 'pointer'}}>
            <img src="images/Menu-burger.png" alt='logo'/>
        </figure>


    </div>


    </header>
    
  )
}

export default Navbar