import React, {FC, useEffect, useState} from 'react';
import ButtonMain from "../../../UI/ButtonMain/ButtonMain";
import "./AuthLogin.scss";
import AuthInput from "../AuthInput/AuthInput";

interface IAuthLogin {
    login: string
    setLogin: (value: string) => void;
    onClick: any
    isLoadingBtn: boolean
}

const AuthLogin : FC<IAuthLogin> = ({login, setLogin, onClick, isLoadingBtn}) => {

    return (
        <div className="auth-login">
            <h3 className="auth-login__title">Вход или регистрация</h3>
            <p className="auth-login__description">Введите логин для авторизации, мы проверим наличие вашего аккаунта в системе</p>
            <AuthInput value={login} setValue={setLogin} placeholder={"Введите логин"} marginBottom="4.8rem" />
            <ButtonMain isLoading={isLoadingBtn} sizeSpinner={28} widthBorder={3.8} onClick={onClick} text={"Продолжить"} height={"5.6rem"} maringBottom={"4.8rem"} />
            <p className="auth-login__info">Номера телефонов могут начинаться только на +7 или +375</p>
        </div>
    );
};

export default AuthLogin;