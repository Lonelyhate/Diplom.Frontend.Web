import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import TitleMain from "../../../../UI/TitleMain/TitleMain";
import "./DiscountCard.scss";

const DiscountCard: FC = () => {

  return (
    <div className='discount-card'>
      <TitleMain text="Дисконтная карта" />
      <ul className='discount-card__list'>
        <li className='discount-card__item'>
          <div className='discount-card__name'>Скидка</div>
          <div className='discount-card__value'>0%</div>
        </li>
        <li className='discount-card__item'>
          <div className='discount-card__name'>Номер карты</div>
          <div className='discount-card__value'>4460000486121</div>
        </li>
        <li className='discount-card__item'>
          <div className='discount-card__name'>Сумма покупок</div>
          <div className='discount-card__value'>0 ₽</div>
        </li>
      </ul>
      <div className='discount-card__loyalty loyalty'>
        <div className='loyalty__procent'>
          <div className='loyalty__body'></div>
        </div>
        <div className='loyalty__numbers'>
          <span className='loyalty__start'>0%</span>
          <span className='loyalty__end'>5%</span>
        </div>
        <p className='loyalty__description'>
          До получения скидки 5% на следующие покупки осталось приобрести
          товаров на 50 000 ₽.
        </p>
      </div>
      <Link to={""} className="discount-card__description">Подробнее о программе лояльности</Link>
    </div>
  );
};

export default DiscountCard;
