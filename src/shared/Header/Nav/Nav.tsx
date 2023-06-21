import React, { FC, useState } from 'react';
import './Nav.scss';
import { Link, useLocation, useParams } from 'react-router-dom';
import Menu from '../../../models/Menu/Menu';
import cn from 'classnames';

const Nav: FC = () => {
    const location = useLocation();

    return (
        <nav className='nav'>
            <ul className='nav__list'>
                {Menu.ManuArray.map(item => (
                    <li key={item.url} className='nav__item'>
                        <Link
                            className={cn('nav__link', {
                                active: location.pathname == item.url
                            })}
                            to={item.url}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
