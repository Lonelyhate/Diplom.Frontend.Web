import React, { FC } from 'react';
import './YandexPay.scss';
import yaPay from '../../../../images/Yandex_Pay_ShortLived.png';
import { RiVisaLine } from 'react-icons/ri';
import {FaYandex} from "react-icons/fa"

const YandexPay: FC = () => {
    return (
        <button className='yandex-pay__btn'>
            <div className="yandex-pay__left">
                <FaYandex size={30} /> Pay
            </div>
            <span className='yandex-pay__text' >Оплатить</span>
            <RiVisaLine size={33} className='yandex-pay__viza' />
        </button>
    );
};

export default YandexPay;
