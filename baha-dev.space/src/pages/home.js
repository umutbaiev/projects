import React from 'react';
import Lottie from 'react-lottie'; 
import fs_image from '../img/fs-img.svg';
import project1 from '../img/project1.jpg';
import animationData from '../animations/json/contact-us.json';

export default function Home() {  

    const defaultOptions = {
        loop: true, 
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return ( 
        <main className="main" id="main">

            <section className="first-slide sec-pt">
                <div className="container">
                    <div className="wrapper">
                        <div className="title-wrap">
                            <h1 className="title">Быстро, <br/> качественно <br/> и недорого</h1>
                            <p className="description">
                                Здравствуйте, меня зовут Бахтияр. Я из Казахстана, занимаюсь разработкой сайтов.
                            </p>
                        </div>

                        <div className="image-wrap">
                            <svg className="rec-animated" width="250" height="250" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="curve" fill="transparent" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"/>
                                <text>
                                    <textPath xlinkHref="#curve">
                                        — Мастер по приготовлению вкусных сайтов — Frontend-разработчик
                                    </textPath>
                                </text>
                            </svg>
                            <img src={fs_image} alt="Изображение статуи" className="image" />
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="about sec-style p">
                <div className="container">
                    <div className="wrapper bt">
                        <div className="number">1</div>
                        <h2 className="title">Мои услуги<br/>(сайты)</h2>
                        <ul className="services items">
                            <li className="service item">
                                <h3 className="service-name item-name">Разработка</h3>
                            </li>
                            <li className="service">
                                <h3 className="service-name item-name">UX/UI</h3>
                            </li>
                            <li className="service">
                                <h3 className="service-name item-name">Доработка</h3>
                            </li>
                            <li className="service">
                                <h3 className="service-name item-name">Обслуживание</h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>  

            <section className="projects-fs sec-style p">  
                <div className="container">
                    <div className="wrapper bt">
                        <div className="inf-header">  
                            <div className="number">2</div> 
                            <h2 className="title">Последние<br/>проекты</h2>
                            <a href="/portfolio" className="all-projects item-name items is-cursor-hover">
                                Все проекты
                                <svg className="is-cursor-hover" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.636114" y1="15.4819" x2="14.3525" y2="0.926435" stroke="white"/>
                                    <line x1="15.2976" y1="0.5" x2="6.29761" y2="0.5" stroke="white"/>
                                    <line x1="14.7976" x2="14.7976" y2="9" stroke="white"/>
                                </svg>
                            </a>
                        </div>

                        <div className="project-cards">
                            <a href="/portfolio"  className="project-card is-cursor-hover">
                                <div className="img-wrap">
                                    <img src={project1} alt="Blockchain technologies" />
                                </div>                                  
                                <div className="project-content">
                                    <div className="project-subtitle subtitle">website</div>
                                    <h3 className="project-title">Blockchain Technologies</h3>
                                </div>
                            </a>
                            <a href="/portfolio" className="project-card is-cursor-hover">
                                <div className="img-wrap">
                                    <img src={project1} alt="Blockchain technologies" />
                                </div>                                  
                                <div className="project-content">
                                    <div className="project-subtitle subtitle">website</div>
                                    <h3 className="project-title">Blockchain Technologies</h3>
                                </div>
                            </a>
                            <a  href="/portfolio" className="project-card is-cursor-hover">
                                <div className="img-wrap">
                                    <img src={project1} alt="Blockchain technologies" />
                                </div>                                  
                                <div className="project-content">
                                    <div className="project-subtitle subtitle">website</div>
                                    <h3 className="project-title">Blockchain Technologies</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="myskills sec-style">
                <div className="container">
                    <div className="wrapper bt">
                        <div className="number">3</div>
                        <h2 className="title">Скиллы</h2>
                        <ul className="skills items">
                                <li className="skill item">
                                    <h3 className="item-name">HTML5</h3>
                                </li>
                                <li className="skill item">
                                    <h3 className="item-name">CSS3</h3>
                                </li>
                                <li className="skill item">
                                    <h3 className="item-name">JS(ES6)</h3>
                                </li>
                                <li className="skill item">
                                    <h3 className="item-name">Jquery</h3>
                                </li>
                                <li className="skill item">
                                    <h3 className="item-name">PHP</h3>
                                </li>
                                <li className="skill item">
                                    <h3 className="item-name">Photoshop</h3>
                                </li>
                                <li className="skill item">
                                    <h3 className="item-name">Figma</h3>
                                </li>
                                <li className="skill item">
                                    <h3 className="item-name">Wordpess</h3>
                                </li>
                            </ul>
                    </div>
                </div>
            </section>
                        
            <section className="reviews sec-style p">
                <div className="container">
                    <div className="wrapper bt">
                        <div className="number">4</div>
                        <h2 className="title">Что говорят<br/>клиенты</h2>
                        <div className="review-wrap items">
                            <blockquote>
                                <p className="review item-name">
                                    Бахтияр - это человек сильно увлеченный своей работой, профессионал и творческий человек.
                                    Он сделал гораздо лучше, чем я ожидал. Действительно потрясающе и удовлетворительно! 
                                    Теперь работаю только с ним.
                                </p>
                            </blockquote>
                            <div className="client-info">
                                <h3 className="client-name">
                                    Белоконь Андрей
                                </h3>
                                <a href="/portfolio" className="project-name subtitle">
                                    andre-studio.ru
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="contact-with-me sec-style">
                <div className="container">
                    <div className="wrapper">
                        <div className="animation-contacts">
                            <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
                        </div>
                        <div className="title-wrap">
                            <div className="subtitle">Поговорим о вашем<br/>проекте</div>
                            <a href="/contacts">
                                <h2 className="title is-cursor-hover">
                                    Свяжитесь со мной
                                </h2>
                                <svg className="is-cursor-hover" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.636114" y1="15.4819" x2="14.3525" y2="0.926435" stroke="white"/>
                                    <line x1="15.2976" y1="0.5" x2="6.29761" y2="0.5" stroke="white"/>
                                    <line x1="14.7976" x2="14.7976" y2="9" stroke="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
