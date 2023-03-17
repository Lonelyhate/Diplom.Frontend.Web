import React, { FC, useEffect, useState } from 'react';
import './AccountInfo.scss';
import Avatar from '../../../../UI/Avatar/Avatar';
import InputMain from '../../../../UI/InputMain/InputMain';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import AuthorizationAPI from '../../../../models/API/UserApi/AuthorizationAPI';
import { fetchUserUpdate } from '../../../../store/reducers/User/creators/UserCreator';
import ButtonMain from '../../../../UI/ButtonMain/ButtonMain';

const AccountInfo: FC = () => {
    const dispacth = useAppDispatch();
    const { isAuth } = useAppSelector(state => state.userReducer);
    const { currentUser } = useAppSelector(state => state.userReducer);
    const [firstname, setFirstname] = useState<string | undefined>('');
    const [lastname, setLastname] = useState<string | undefined>('');
    const [email, setEmail] = useState<string | undefined>('');
    const [phone, setPhone] = useState<string | undefined>('');

    const sendData = () => {
        dispacth(
            fetchUserUpdate({
                id: currentUser?.id,
                email: email!,
                firstname: firstname,
                lastname: lastname,
                phone: phone
            })
        );
    };

    useEffect(() => {
        setEmail(currentUser?.email);
        setFirstname(currentUser?.firstname);
        setLastname(currentUser?.lastname);
        setPhone(currentUser?.phone);
    }, [currentUser]);

    return (
        <div className='account-info'>
            <div className='account-info__content'>
                <div className='account-info__avatar'>
                    <Avatar />
                </div>
                <div className='account-info__fio'>
                    <InputMain
                        setValue={setFirstname}
                        value={firstname}
                        labelText='Имя'
                        placeholder='Введите имя'
                        marginRight={24}
                        svgCheckCancel={currentUser?.firstname}
                    />
                    <InputMain
                        setValue={setLastname}
                        value={lastname}
                        labelText='Фамилия'
                        placeholder='Введите фамилию'
                        svgCheckCancel={currentUser?.lastname}
                    />
                </div>
                <p className='account-info__check-data'>
                    Проверьте правильность ввода личных данных, они необходимы
                    для получения и оформления заказа
                </p>
                <div className='account-info__mail'>
                    <h3 className='account-info__subtitle'>
                        Электронная почта
                    </h3>
                    <InputMain
                        setValue={setEmail}
                        value={email}
                        svgCheckCancel={currentUser?.email}
                        labelText='Почта'
                        placeholder='Введите почту'
                    />
                </div>
                <p className='account-info__check-data'>
                    Получайте информацию о состоянии статуса ваших заказов
                </p>
                <div className='account-info__phone'>
                    <h3 className='account-info__subtitle'>Номер телефона</h3>
                    <InputMain
                        setValue={setPhone}
                        value={phone}
                        labelText='Номер телефона'
                        placeholder='Введите номер телефона'
                        svgCheckCancel={currentUser?.phone}
                    />
                </div>
                <p className='account-info__check-data'>
                    Номер телефона необходим для оформления заказа <br />
                    При изменении номера телефона вам придется его подтвердить.
                </p>
                <ButtonMain
                    location='center'
                    width={300}
                    onClick={sendData}
                    text={'Сохранить'}
                />
            </div>
        </div>
    );
};

export default AccountInfo;
