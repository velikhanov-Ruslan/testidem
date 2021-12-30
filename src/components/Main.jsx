import React from "react";
import ShipImage from '../assets/images/ship.jpg'

const Main = () => {
    return (
        <main className="main">
        <section className="about about--tablet-order">
          <div className="about__inner about__inner--tablet-order"><p className="about__text">Наши сотрудники</p></div>
          <div className="about__description about__description--tablet-order"><p className="about__text">Просветляет понимающий тест</p></div>
          <div className="about__content about__content--tablet-order"><p className="about__text">Конформизм</p></div>
          <div className="about__intro about__intro--tablet-order"><p className="about__text">Интроекция</p></div>
          <div className="about__worker about__worker--tablet-order"><p className="about__text">Наши сотрудники</p></div>
        </section>
        <section className="blank">
          <div className="blank__column">
            <div className="blank__inner"><p className="blank__heading">Понятие модернизации понимает механизм власти</p></div>
            <div className="blank__wrapper">
              <img src={ShipImage} alt="ship" />
              <div className="blank__text">Наши сотрудники</div>
            </div>
          </div>
          <div className="blank__description">
            <div className="blank__family">
              <span>Фамилия</span>
              <span>Мамай</span>
            </div>
            <div className="blank__name">
              <span>Имя и отчество</span>
              <span className="blank__named">Станиславаленина Владимировна</span>
            </div>
            <div className="blank__police">
              <span className="blank__issued">Номер полиса выдан заведомо ложный</span>
              <span>01354879</span>
            </div>
            <div className="blank__birthday">
              <span>Дата рождения</span>
              <span>01.12.1976</span>
            </div>
            <div className="blank__phone">
              <span>Телефон</span>
              <span>+79254218069</span>
            </div>
          </div>
        </section>
        <section className="hero hero--tablet-order">
          <div className="hero__title"><p className="hero__text">Гений непредвзято понимает под собой конфликт. Закон внешнего мира, очевидно, реально подчеркивает аксиоматичный здравый смысл. Культ джайнизма включает в себя поклонение Махавире и другим тиртханкарам, поэтому закон исключённого третьего индуцирует изоморфный ротор.</p></div>
          <div className="hero__column">
            <div className="hero__description">Чувство однократно</div>
            <div className="hero__moreno">Морено</div>
          </div>
        </section>
        <section className="vector vector--tablet-order">
          <div className="vector__inner vector__inner--tablet-order"><p className="vector__text">Однако</p></div>
          <div className="vector__dot vector__dot--tablet-order"><p className="vector__text">Точка перегиба</p></div>
          <div className="vector__block vector__block--tablet-order"><p className="vector__text">Длина вектора</p></div>
          <div className="vector__position vector__position--tablet-order"><p className="vector__text">Лидерство</p></div>
          <div className="vector__genius vector__genius--tablet-order"><p className="vector__text">Невероятный гений</p></div>
        </section>
      </main>

    )
}

export default Main