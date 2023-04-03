import React, { FC, useState } from 'react';
import './CreditCard.scss';
import visa from '../../../../images/visa.svg';
import masterCard from '../../../../images/master-card.svg';
import mir from '../../../../images/mir.png';
import cvc from '../../../../images/cvc.svg';
import ButtonMain from '../../../../UI/ButtonMain/ButtonMain';

const CreditCard: FC = () => {
    const [numberCard, setNumberCard] = useState<string>('');
    const [validity, setValidity] = useState<string>('');
    const [checkCode, setCheckCode] = useState<string>('');
    return (
        <>
            <div className='payture__card payture-card'>
                <div className='payture-card__number'>
                    <div className='payture-card__name'>Номер карты</div>
                    <div className='payture-card__input-number'>
                        <input type='text' placeholder='1234 1234 1234 1234' className='payture-card__input' />
                        <div className='payture-card__imgs'>
                            <img src={visa} alt='' />
                            <img src={masterCard} alt='' />
                            <img src={mir} alt='' />
                        </div>
                    </div>
                </div>
                <div className='payture-card__bottom'>
                    <div className='payture-card__validity'>
                        <div className='payture-card__name'>Срок действия карты</div>
                        <input type='text' className='payture-card__validity-input' placeholder='ММ/ГГ' />
                    </div>
                    <div className='payture-card__ver-code'>
                        <div className='payture-card__name'>Проверочный код</div>
                        <div className='payture-card__ver-input'>
                            <input type='text' className='payture-card__inp' placeholder='CVC' />
                            <img src={cvc} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='payture__btn'>
                <p className='payture__info'>
                    Нажимая на кнопку, вы соглашаетесь с <a href='https://payture.com/termsofuse'>условиями использования сервиса</a>
                </p>
                <ButtonMain width={145} fontSize={18} height={52} onClick={() => {}} text={'Заплатить'} />
            </div>
        </>
    );
};

export default CreditCard;
