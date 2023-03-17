import React, { FC, useEffect, useState } from 'react';
import './AuthPassword.scss';
import AuthInput from '../AuthInput/AuthInput';
import ButtonMain from '../../../UI/ButtonMain/ButtonMain';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
    fetchUserLogin,
    fetchUserRegistration,
    userErrorClean
} from '../../../store/reducers/User/creators/UserCreator';
import { log } from 'util';
import ValidationError from '../../../UI/ValidationError/ValidationError';
import Spinner from '../../../UI/Spinner/Spinner';

interface IAuthPassword {
    isHaveAccount: boolean;
    toReturn: (value: boolean) => void;
    login: string;
    password: string;
    setPassword: any;
    passwordConfrim: string;
    setPasswordConfrim: any;
    cleanAuth: any;
}

const AuthPassword: FC<IAuthPassword> = ({
    isHaveAccount,
    toReturn,
    login,
    password,
    setPassword,
    cleanAuth,
    setPasswordConfrim,
    passwordConfrim
}) => {
    const dispatch = useAppDispatch();
    const { currentUser, isLoading, error } = useAppSelector(
        state => state.userReducer
    );
    const [errorVisible, setErrorVisable] = useState<boolean>(false);
    const [disabledButton, setDisabledButton] = useState<boolean>(false);

    const userLogin = () => {
        dispatch(fetchUserLogin(login, password));
        if (error != '') {
            setPassword('');
        }
    };

    const userRegistration = () => {
        dispatch(fetchUserRegistration(login, password, passwordConfrim));
        if (error != '') {
            setPassword('');
        }
    };

    const toReturnForSetLogin = () => {
        toReturn(false);
        dispatch(userErrorClean());
        cleanAuth();
    };

    return (
        <div className={'auth-password'}>
            <h3 className='auth-password__title'>Введите пароль</h3>
            <p className='auth-password__description'>
                {isHaveAccount
                    ? 'Введите пароль, чтобы войти в аккаунт'
                    : 'Придумайте пароль для регистрации нового аккаунта'}
            </p>
            {!isLoading ? (
                <>
                    <AuthInput
                        validation={error !== ''}
                        value={password}
                        setValue={setPassword}
                        placeholder={'Введите пароль'}
                        type='password'
                    />
                    {!isHaveAccount && (
                        <AuthInput
                            validation={error !== ''}
                            value={passwordConfrim}
                            setValue={setPasswordConfrim}
                            placeholder={'Подтвердите пароль'}
                            type={'password'}
                        />
                    )}
                    <ValidationError text={error} />
                </>
            ) : (
                <div className='auth-password__loading'>
                    <Spinner color={'black'} />
                </div>
            )}
            {isHaveAccount ? (
                <ButtonMain
                    marginTop={'4.8rem'}
                    backGround={'gray'}
                    height={'56px'}
                    text={'Войти'}
                    onClick={userLogin}
                />
            ) : (
                <ButtonMain
                    marginTop={'4.8rem'}
                    backGround={'gray'}
                    height={'56px'}
                    text={'Зарегистрироваться'}
                    onClick={userRegistration}
                />
            )}
            <ButtonMain
                disabled={disabledButton}
                backGround={'gray'}
                marginTop={'8px'}
                height={'56px'}
                text={'Изменить логин'}
                onClick={() => toReturnForSetLogin()}
            />
        </div>
    );
};

export default AuthPassword;
