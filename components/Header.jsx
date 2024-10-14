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
            <img src="images/Menu-burger.png" alt='burger'/>
        </figure>

    {isMobileMenuOpen && 
      (<nav className='header__mobile--nav'>
        <figure className='header__mobile--close' onClick={() => setIsMobileMenuOpen(false)} style={{cursor: 'pointer'}}>
            <img src="images/Menu-close.png" alt='btn'/>
        </figure>

        <ul>
            <li className='header__text header__mobile--agency_pos'><h1>Агенство</h1></li>
            <li className='header__text header__mobile--services_pos'><h1>Услуги</h1></li>
            <li className='header__text header__mobile--cases_pos'><Link href='/cases'><h1>Кейсы</h1></Link></li>
            <li className='header__text header__mobile--blog_pos'><h1>Блог</h1></li>
            <li className='header__text header__mobile--contacts_pos'><h1>Контакты</h1></li>
          </ul>

          <figure className='header__mobile--border header__mobile--border1_pos'>
            <img src="images/Rectangle 758.png" alt='border'/>
          </figure>  

          <figure className='header__mobile--border header__mobile--border2_pos'>
            <img src="images/Rectangle 758.png" alt='border'/>
          </figure>  

          <footer>
            <p className='header__text footer footer__contacts--pos'>Контакты:</p>
            <p className='header__text footer footer__number--pos'>+7 999 123 45 67</p>
            <p className='header__text footer footer__email--pos'>hello@cyberia.studio</p>
            <p className='header__text footer footer__adress--pos'>ул.Ярных, д.35, оф.10</p>
          </footer>

      </nav>)
    }

    </div>


    </header>
    
  )
}

export default Navbar