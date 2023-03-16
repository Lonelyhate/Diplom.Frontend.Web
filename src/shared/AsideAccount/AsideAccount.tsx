import React, { FC } from 'react';
import './AsideAccount.scss';
import { Link, useLocation } from 'react-router-dom';
import { ACCOUNT_URL, ADDRESS_URL, DISCOUNT_URL, ORDERS_URL } from '../../models/urls';
import cn from 'classnames';

const AsideAccount: FC = () => {
    const path = useLocation().pathname;

    return (
        <aside className='aside-account'>
            <Link
                className={cn('aside-account__link', {
                    active: path == ACCOUNT_URL
                })}
                to={ACCOUNT_URL}
            >
                Информация
            </Link>
            <Link
                className={cn('aside-account__link', {
                    active: path == ADDRESS_URL
                })}
                to={ADDRESS_URL}
            >
                Адреса
            </Link>
            <Link
                className={cn('aside-account__link', {
                    active: path == DISCOUNT_URL
                })}
                to={DISCOUNT_URL}
            >
                Дисконтная карта
            </Link>
            <Link
                className={cn('aside-account__link', {
                    active: path == ORDERS_URL
                })}
                to={ORDERS_URL}
            >
                Заказы
            </Link>
        </aside>
    );
};

export default AsideAccount;
