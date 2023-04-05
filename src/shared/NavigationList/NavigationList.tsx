import React, { FC } from 'react';
import './NavigationList.scss';
import cn from 'classnames';
import { linkItem } from '../../models/types';
import { Link } from 'react-router-dom';

interface INavigationList {
    items: linkItem[];
}

const NavigationList: FC<INavigationList> = ({ items }) => {
    return (
        <ul className='navigation-list'>
            {items.map((item, i) => (
                <li key={item.url} className='navigation-list__item'>
                    <Link
                        to={item.url}
                        className={cn('navigation-list__link', {
                            current: item.current == 1
                        })}
                    >
                        {item.name} {items.length - 1 == i ? '' : <span>/</span>}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavigationList;
