import React, { FC } from "react";
import "./FooterTwo.scss";

const FooterTwo: FC = () => {
  return (
    <div className='footer-two'>
      <h3 className='footer__subtitle'>Интернет-магазин</h3>
      <ul className='footer-two__list'>
        <li className='footer-two__item'>
          <a href='tel:+74955445770' className='footer-two__link'>
            +7 (495) 544-57-70
          </a>
        </li>
        <li className='footer-two__item'>
          <a href='tel:+78007752834' className='footer-two__link'>
            +7 (800) 775-28-34
          </a>
        </li>
      </ul>
      <h3 className='footer__subtitle'>Адреса магазинов</h3>
      <ul className='footer-two__list'>
        <li className='footer-two__item'>
          <a
            href='https://yandex.ru/maps/-/CCUnAYVJCA'
            className='footer-two__link'
          >
            Москва, Каретный Ряд, 8
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterTwo;
