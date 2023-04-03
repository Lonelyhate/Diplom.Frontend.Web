import React, { FC, useState } from 'react';
import './Payture.scss';
import { useNavigate, useParams } from 'react-router-dom';
import TypePayment, { paymentItem } from '../../models/TypePayment/TypePayment';
import CreditCard from './components/CreditCard/CreditCard';
import paytureImg from '../../images/logo_payture.svg';
import YandexPay from './components/YandexPay/YandexPay';
import SberPayment from './components/SberPayment/SberPayment';

const Payture: FC = () => {
    const navigation = useNavigate();
    let Component;
    const type = useParams<{ type: string }>().type;

    const onClickGoBack = () => {
        navigation(-1);
    };

    const onClickMakePayment = () => {};

    switch (type) {
        case "yandex":
            Component = YandexPay;
            break;
        case "sber":
            Component = SberPayment;
            break;
        default:
            Component = CreditCard;
            break;
    }

    return (
        <div className='payture'>
            <div className='payture__content'>
                <div className='payture__logo'>
                    <img src={paytureImg} alt='' className='payture__logo-img' />
                    <div className='payture__logo-text'>
                        <h3 className='payture__logo-title'>Payture</h3>
                        <p className='payture__logo-text'>Процессинговый центр</p>
                    </div>
                </div>
                <div className='payture__header'>
                    <h3 className='payture__price'>37380.00 ₽</h3>
                    <div className='payture__number-order'>заказа №201614872</div>
                </div>
                {Component && <Component />}
                <p className='payture__decr'>
                    Оплата будет произведена с помощью платёжного шлюза Payture ― №1 сертифицированный провайдер платежей согласно
                    стандартам безопасности платёжных систем Visa и Mastercard.
                </p>
            </div>
        </div>
    );
};

export default Payture;
