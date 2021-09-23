import React from 'react'
 
export default function Contacts() {
    return (
        <main className="main" id="main">

            <div className="contacts sec-pt">
                <div className="container">
                    <div className="wrapper">
                        <div className="image-wrap">
                            <svg className="rec-animated" width="250" height="250" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="curve" fill="transparent" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"/>
                                <text>
                                    <textPath xlinkHref="#curve">
                                        — Мастер по приготовлению вкусных сайтов — Frontend-разработчик
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                        <div className="title-wrap">
                            <a href="tel:77074660324" className="phone">+7 707 466 03 24</a>
                            <a href="mailto:umutbaiev20022002@gmail.com" className="mail">umutbaiev20022002@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <section className="contact-form p">
                <div className="container">
                    <h1 className="title">Свяжитесь со мной</h1>
                    <form className="contact" id="contact">
                        <div className="form-wrap">
                            <div className="input-wrap">
                                <label className="subtitle" for="name">Имя<span className="red-star">*</span></label>
                                <input type="text" required id="name" placeholder="Введите имя" className="name" name="name" />
                            </div>
                            <div className="input-wrap">
                                <label className="subtitle" for="mail">Email<span className="red-star">*</span></label>
                                <input type="email" className="mail" id="mail" name="mail" placeholder="Введите свою почту" />
                            </div>
                            <div className="input-wrap">
                                <label className="subtitle" for="title">Тема</label>
                                <input type="text" className="title" id="title" name="title" placeholder="Введите название темы" />
                            </div>
                        </div>
                        <div className="input-wrap">
                            <label className="subtitle" for="message">Сообщение</label>
                            <textarea name="message" id="message" className="message" placeholder="Введите сообщение"></textarea>
                        </div>
                        <button className="btn center send-request" id="send-request">Отправить</button>
                    </form>
                </div>
            </section>
        </main>
    )
}
 