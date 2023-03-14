import React, { FC, useState, useRef, useEffect } from 'react';
import './ProfileLinks.scss';
import ProfileNavigation from '../../../models/ProfileNavigation/ProfileNavigation';
import { Link } from 'react-router-dom';
import Auth from '../../Auth/Auth';
import cn from 'classnames';
import { useAppSelector } from '../../../hooks/redux';
import ProfilePopup from '../ProfilePopup/ProfilePopup';
import CartPopup from '../CartPopup/CartPopup';

const ProfileLinks: FC = () => {
    const { isAuth } = useAppSelector(state => state.userReducer);
    const { favorites } = useAppSelector(state => state.favortiesReducer);
    const [isActiveProfile, setIsActiveProfile] = useState(false);
    const [isActiveCart, setIsActiveCart] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);
    const profileBtnRef = useRef(null)
    const cartRef = useRef<HTMLDivElement>(null);
    const cartBtnRef = useRef(null);

    const openProfile = (): void => {
        setIsActiveProfile(!isActiveProfile);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            console.log(event.composedPath())
            if (!event.composedPath().includes(profileRef.current!) && !event.composedPath().includes(profileBtnRef.current!) ) {
                setIsActiveProfile(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () =>
            document.body.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className='profile-links'>
            <ul className='profile-links__list'>
                <li className='profile-links__item'>
                    <Link
                        to={ProfileNavigation.Favorites.url!}
                        className='profile-links__link'
                    >
                        <ProfileNavigation.Favorites.img size={24} />
                        {favorites.length > 0 && (
                            <span className='profile-links__favorites-span'>
                                {favorites.length}
                            </span>
                        )}
                    </Link>
                </li>
                <li className='profile-links__item'>
                    <button className='profile-links__button'>
                        <ProfileNavigation.Search.img size={24} />
                    </button>
                </li>
                <li className='profile-links__item'>
                    <button
                        onClick={() => {
                            setIsActiveCart(!isActiveCart);
                        }}
                        className='profile-links__button'
                    >
                        <ProfileNavigation.Cart.img size={24} />
                    </button>
                </li>
                <li className='profile-links__item '>
                    <button
                        ref={profileBtnRef}
                        onClick={openProfile}
                        className='profile-links__button profile-links__button_profile'
                    >
                        <ProfileNavigation.Profile.img size={24} />
                    </button>
                </li>
            </ul>
            <div
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
                {isAuth ? (
                    <ProfilePopup />
                ) : (
                    <Auth openAuthInModal={isActiveProfile} />
                )}
            </div>
        </div>
    );
};

export default ProfileLinks;
