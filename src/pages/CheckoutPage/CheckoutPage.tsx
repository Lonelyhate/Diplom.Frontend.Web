import React, { FC, useState, useEffect } from 'react';
import './CheckoutPage.scss';
import TitleMain from '../../UI/TitleMain/TitleMain';
import InputMain from '../../UI/InputMain/InputMain';
import { useAppSelector } from '../../hooks/redux';

const CheckoutPage: FC = () => {
    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const { currentUser } = useAppSelector(state => state.userReducer);

    useEffect(() => {
        if (currentUser?.firstname) {
            setFirstname(currentUser.firstname);
        }
        if (currentUser?.lastname) {
            setLastname(currentUser.lastname)
        }
    }, [currentUser?.firstname, currentUser?.lastname]);

    return (
        <div className='checkout-page'>
            <div className='checkout-page__container container'>
                <TitleMain
                    text='Оформление заказа'
                    location='center'
                    style='high'
                />
                <h3 className='checkout-page__subtitle'>1. Имя и фамилия</h3>
                <div className='checkout-page__name'>
                    <InputMain
                        value={firstname}
                        setValue={setFirstname}
                        placeholder='Введите имя'
                        labelText='Имя*'
                    />
                    <InputMain
                        value={lastname}
                        setValue={setLastname}
                        placeholder='Введите фамилию'
                        labelText='Фамилия*'
                    />
                </div>
                <h3 className='checkout-page__subtitle'>1. Имя и фамилия</h3>
            </div>
        </div>
    );
};

export default CheckoutPage;
