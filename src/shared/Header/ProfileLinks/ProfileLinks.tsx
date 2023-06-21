import React, { FC, useState, useRef, useEffect } from 'react';
import './ProfileLinks.scss';
import ProfileNavigation from '../../../models/ProfileNavigation/ProfileNavigation';
import { Link } from 'react-router-dom';
import Auth from '../../Auth/Auth';
import cn from 'classnames';
import { useAppSelector } from '../../../hooks/redux';
import ProfilePopup from '../ProfilePopup/ProfilePopup';
import CartPopup from '../CartPopup/CartPopup';
import { SEARCH_PAGE_URL } from '../../../models/urls';

const ProfileLinks: FC = () => {
    const { isAuth } = useAppSelector(state => state.userReducer);
    const { favorites } = useAppSelector(state => state.favortiesReducer);
    const { cart, error, isLoading } = useAppSelector(state => state.cartReducer);
    const [isActiveProfile, setIsActiveProfile] = useState(false);
    const [isActiveCart, setIsActiveCart] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);
    const profileBtnRef = useRef(null);
    const cartRef = useRef<HTMLDivElement>(null);
    const cartBtnRef = useRef(null);

    const openProfile = (): void => {
        setIsActiveProfile(!isActiveProfile);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!event.composedPath().includes(profileRef.current!) && !event.composedPath().includes(profileBtnRef.current!)) {
                setIsActiveProfile(false);
            }
            if (!event.composedPath().includes(cartRef.current!) && !event.composedPath().includes(cartBtnRef.current!)) {
                setIsActiveCart(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => document.body.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className='profile-links'>
            <ul className='profile-links__list'>
                <li className='profile-links__item'>
                    <Link to={ProfileNavigation.Favorites.url!} className='profile-links__link'>
                        <ProfileNavigation.Favorites.img size={24} />
                        {favorites.length > 0 && <span className='profile-links__favorites-span'>{favorites.length}</span>}
                    </Link>
                </li>
                <li className='profile-links__item'>
                    <button className='profile-links__button'>
                        <Link to={SEARCH_PAGE_URL} className='profile-links__link'>
                            <ProfileNavigation.Search.img size={24} />
                        </Link>
                    </button>
                </li>
                <li className='profile-links__item'>
                    <button
                        ref={cartBtnRef}
                        onClick={() => {
                            setIsActiveCart(!isActiveCart);
                        }}
                        className='profile-links__button'
                    >
                        <ProfileNavigation.Cart.img size={24} />
                        {cart && cart.countProducts > 0 && <span className='profile-links__cart-span'>{cart.countProducts}</span>}
                    </button>
                </li>
                <li className='profile-links__item '>
                    <button ref={profileBtnRef} onClick={openProfile} className='profile-links__button profile-links__button_profile'>
                        <ProfileNavigation.Profile.img size={24} />
                    </button>
                </li>
            </ul>
            <div
                ref={cartRef}
                className={cn('profile-links__cart', {
                    active: isActiveCart
                })}
            >
                <CartPopup />
            </div>
            <div
                ref={profileRef}
                className={cn('profile-links__profile', {
                    active: isActiveProfile
                })}
            >
                {isAuth ? <ProfilePopup /> : <Auth openAuthInModal={isActiveProfile} />}
            </div>
        </div>
    );
};

export default ProfileLinks;
