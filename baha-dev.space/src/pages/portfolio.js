import React from 'react'
import project1 from '../img/project1.jpg'
 
export default function Portfolio() {
    return (
        <main className="main" id="main">
            <section className="portfolio sec-pt"> 
                <div className="container">
                    <div className="wrapper">
                        <div className="title-wrap">
                            <p className="subtitle">Мои лучшие работы</p>
                            <h1 className="title">Портфолио</h1>
                        </div>
                        <div className="portfolio-grid">
                            <a href="/" className="portfolio-case__card">
                                <div className="image-wrap">
                                    <img className="image" src={project1} alt="Blockchain technologies" />
                                </div>
                                <div className="portofolio-case__content is-cursor-hover">
                                    <div className="portfolio-case__date">2021</div>
                                    <h3 className="portfolio-case__name is-cursor-hover">Blockchain technologies</h3>
                                    <p className="portfolio-case__category subtitle is-cursor-hover">website</p>
                                </div>
                            </a>
                            <a href="/" className="portfolio-case__card">
                                <div className="image-wrap">
                                    <img className="image" src={project1} alt="Blockchain technologies" />
                                </div>
                                <div className="portofolio-case__content is-cursor-hover">
                                    <div className="portfolio-case__date">2021</div>
                                    <h3 className="portfolio-case__name is-cursor-hover">Blockchain technologies</h3>
                                    <p className="portfolio-case__category subtitle is-cursor-hover">website</p>
                                </div>
                            </a>
                            <a href="/" className="portfolio-case__card">
                                <div className="image-wrap">
                                    <img className="image" src={project1} alt="Blockchain technologies" />
                                </div>
                                <div className="portofolio-case__content is-cursor-hover">
                                    <div className="portfolio-case__date">2021</div>
                                    <h3 className="portfolio-case__name is-cursor-hover">Blockchain technologies</h3>
                                    <p className="portfolio-case__category subtitle is-cursor-hover">website</p>
                                </div>
                            </a>
                            <a href="/" className="portfolio-case__card">
                                <div className="image-wrap">
                                    <img className="image" src={project1} alt="Blockchain technologies" />
                                </div>
                                <div className="portofolio-case__content is-cursor-hover">
                                    <div className="portfolio-case__date">2021</div>
                                    <h3 className="portfolio-case__name is-cursor-hover">Blockchain technologies</h3>
                                    <p className="portfolio-case__category subtitle is-cursor-hover">website</p>
                                </div>
                            </a>
                            <a href="/" className="portfolio-case__card">
                                <div className="image-wrap">
                                    <img className="image" src={project1} alt="Blockchain technologies" />
                                </div>
                                <div className="portofolio-case__content is-cursor-hover">
                                    <div className="portfolio-case__date">2021</div>
                                    <h3 className="portfolio-case__name">Blockchain technologies</h3>
                                    <p className="portfolio-case__category subtitle">website</p>
                                </div>
                            </a>
                            <a href="/" className="portfolio-case__card">
                                <div className="image-wrap">
                                    <img className="image" src={project1} alt="Blockchain technologies" />
                                </div>
                                <div className="portofolio-case__content is-cursor-hover">
                                    <div className="portfolio-case__date">2021</div>
                                    <h3 className="portfolio-case__name">Blockchain technologies</h3>
                                    <p className="portfolio-case__category subtitle">website</p>
                                </div>
                            </a>
                            <a href="/" className="portfolio-case__card">
                                <div className="image-wrap">
                                    <img className="image" src={project1} alt="Blockchain technologies" />
                                </div>
                                <div className="portofolio-case__content is-cursor-hover">
                                    <div className="portfolio-case__date">2021</div>
                                    <h3 className="portfolio-case__name">Blockchain technologies</h3>
                                    <p className="portfolio-case__category subtitle">website</p>
                                </div>
                            </a>
                            <a href="/" className="portfolio-case__card">
                                <div className="image-wrap">
                                    <img className="image" src={project1} alt="Blockchain technologies" />
                                </div>
                                <div className="portofolio-case__content is-cursor-hover">
                                    <div className="portfolio-case__date">2021</div>
                                    <h3 className="portfolio-case__name">Blockchain technologies</h3>
                                    <p className="portfolio-case__category subtitle">website</p>
                                </div>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
    ) 
}
