import React from 'react';
import Logo from '../header/logo'; 

export default function Footer() {

    return (
        <footer className="footer"> 
            <div className="container">

                <div className="footer-mid">
                    <Logo clas="" />
                    <nav className="site-menu hide-sm">
                        <ul>
                            <li><a href="/">Главная</a></li>
                            <li><a href="/portfolio">Портфолио</a></li>
                            <li><a href="/contacts">Контакты</a></li>
                        </ul>
                    </nav>
                    <a className="mail" href="mailto:umutbaiev20022002@gmail.com">umutbaiev20022002@gmail.com</a>
                </div>
                <div className="footer-bottom">
                    <p className="content">
                        © 2021 Бахтияр Умутбаев. Все права защищены
                    </p>
                    <ul className="social-media">
                        <li><a href="https://www.instagram.com/blinded000/"> <i className="icon-instagram is-cursor-hover"></i></a></li>
                        <li><a href="https://www.facebook.com/BakhtiyarUmutbayev/"><i className="icon-facebook is-cursor-hover"></i></a></li>
                        <li><a href="https://t.me/bakhtiyar_umutbaiev"><i className="icon-send is-cursor-hover"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
