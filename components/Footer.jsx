import '../assets/styles/footer.css';
import Link from 'next/link';

import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='footer__desktop'>
        <figure className='footer__desktop--logo'>
            <img src="images/_2834812530736.png" alt='logo'/>
        </figure>

        <section className='footer__desktop--title'>
            <p>Веб-разработка и усиление IT-команд</p>
        </section>

        <nav>
            <ul>
                <li className='footer__desktop--phone_pos'><h1 className='footer__desktop--text'>+7 999 123 45 67</h1></li>
                <li className='footer__desktop--email_pos'><h1 className='footer__desktop--text'>hello@cyberia.studio</h1></li>
                <li className='footer__desktop--adress_pos'><h1 className='footer__desktop--text'>ул.Ярных, д.35, оф.10</h1></li>
                <li className='footer__desktop--agensy_pos'><h1 className='footer__desktop--text'>Агентство</h1></li>
                <li className='footer__desktop--services_pos'><h1 className='footer__desktop--text'>Услуги</h1></li>
                <li className='footer__desktop--cases_pos'><Link href='/cases' className='footer__desktop--text'><h1>Кейсы</h1></Link></li>
                <li className='footer__desktop--blog_pos'><h1 className='footer__desktop--text'>Блог</h1></li>
                <li className='footer__desktop--contacts_pos'><h1 className='footer__desktop--text'>Контакты</h1></li>
            </ul>
        </nav>
        </div>

        <div className='footer__mobile'>
            <figure className='footer__mobile--logo'>
                <img src="images/_2834812530736.png" alt='logo'/>
            </figure>

            <section className='footer__mobile--title'>
                <p>Веб-разработка и усиление IT-команд</p>
            </section>

            <nav>
            <ul>
                <li className='footer__mobile--phone_pos'><h1 className='footer__mobile--text'>+7 999 123 45 67</h1></li>
                <li className='footer__mobile--email_pos'><h1 className='footer__mobile--text'>hello@cyberia.studio</h1></li>
                <li className='footer__mobile--adress_pos'><h1 className='footer__mobile--text'>ул.Ярных, д.35, оф.10</h1></li>
                <li>
                    <ul className='footer__mobile--nav footer__mobile--list'>
                        <li><h1 className='footer__mobile--text'>Агенство</h1></li>
                        <li><h1 className='footer__mobile--text'>Услуги</h1></li>
                        <li><h1 className='footer__mobile--text'><Link href='/cases'>Кейсы</Link></h1></li>
                        <li><h1 className='footer__mobile--text'>Блог</h1></li>
                        <li><h1 className='footer__mobile--text'>Вопросы</h1></li>
                    </ul>
                </li>
            </ul>
        </nav>

        </div>
    </footer>
  )
}

export default Footer