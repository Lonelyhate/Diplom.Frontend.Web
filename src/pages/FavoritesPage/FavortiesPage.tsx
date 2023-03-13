import React, { FC, useEffect } from 'react';
import './FavoritesPage.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchFavoritesAll } from '../../store/reducers/Product/Creators/FavoritesCreator';
import TitleMain from '../../UI/TitleMain/TitleMain';
import ProductItem from '../../shared/ProductItem/ProductCard';
import FavoritesApi from '../../models/API/ProductApi/FavoritesApi';
import ButtonMain from '../../UI/ButtonMain/ButtonMain';

const FavortiesPage: FC = () => {
    const { error, favorites, isLoading } = useAppSelector(
        state => state.favortiesReducer
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchFavoritesAll());
    }, []);

    return (
        <div className='favorites-page'>
            <div className='favorites-page__container container'>
                {favorites.length > 0 ? (
                    <>
                        <TitleMain
                            text='Избранное'
                            location='center'
                            style='high'
                        />
                        <ul className='favorites-page__list'>
                            {favorites.map(item => (
                                <li
                                    key={item.id}
                                    className='favorites-page__item'
                                >
                                    <ProductItem
                                        sizeVisable={true}
                                        product={item}
                                    />
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <div className='favorites-page__nocontent'>
                        <TitleMain
                            text='Вы еще не добавляли товары в избранное'
                            location='center'
                            style='high'
                        />
                        <ButtonMain
                            backGround='gray'
                            marginTop='2.4rem'
                            height={48}
                            width={180}
                            onClick={() => {}}
                            text={'Перейти к новинкам'}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FavortiesPage;
