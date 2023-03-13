import React, { FC, useEffect, useRef, useState } from 'react';
import './ProductPage.scss';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProductById } from '../../store/reducers/Product/Creators/ProductCreator';
import ProductImages from './components/ProductImages/ProductImages';
import ProductInfo from './components/ProductInfo/ProductInfo';
import FavoritesApi from '../../models/API/ProductApi/FavoritesApi';
import {
    fetchFavoritesAdd,
    fetchFavoritesDelete
} from '../../store/reducers/Product/Creators/FavoritesCreator';

const ProductPage: FC = () => {
    const dispatch = useAppDispatch();
    const { product, isLoading } = useAppSelector(
        state => state.productReducer
    );
    const [isFavorites, setIsFavorties] = useState<boolean>(false);
    const id = useParams<{ id: string }>().id;

    const setFavoritesCheck = async () => {
        let result = await FavoritesApi.CheckFavorites(Number(id));
        setIsFavorties(result.data!);
    };

    const productDeleteFromFavorties = async () => {
        dispatch(fetchFavoritesDelete(Number(id)));
        setIsFavorties(false);
    };

    const sendProductToFavorties = () => {
        dispatch(fetchFavoritesAdd(Number(id)));
        setIsFavorties(true);
    };

    useEffect(() => {
        dispatch(fetchProductById(id!));
        setFavoritesCheck();
        return () => {};
    }, []);

    return (
        <div className={'product-page'}>
            <div className='product-page__container container'>
                <div className='product-page__content'>
                    {product && (
                        <>
                            <ProductImages product={product} />
                            <ProductInfo
                                deleteFromFavorites={productDeleteFromFavorties}
                                addToFavorites={sendProductToFavorties}
                                product={product}
                                isFavorites={isFavorites}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
