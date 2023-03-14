import React, { FC, useEffect, useState } from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { useFirstImage } from '../../hooks/images';
import { IProduct } from '../../models/Product/Product';
import { IoIosStar } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import { PRODUCT_PAGE_URL } from '../../models/urls';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import cn from 'classnames';
import {
    fetchFavoritesAdd,
    fetchFavoritesDelete
} from '../../store/reducers/Product/Creators/FavoritesCreator';
import {
    setModalProductVisable,
    setProductForModal
} from '../../store/reducers/Product/Creators/ProductCreator';

interface IProductItem {
    product: IProduct;
    sizeVisable?: boolean;
}

const ProductItem: FC<IProductItem> = ({ product, sizeVisable = false }) => {
    const { favorites } = useAppSelector(state => state.favortiesReducer);
    const { currentProductForModal, visableModalProduct } = useAppSelector(
        state => state.productReducer
    );
    const dispatch = useAppDispatch();
    const [isFavorties, setIsFavorites] = useState<boolean>(
        favorites.some(f => f.id == product.id)
    );
    const sizes: string[] = product.sizes.split(';');

    const setVisableModal = () => {
        dispatch(setProductForModal(product));
        dispatch(setModalProductVisable(true));
    };

    const sendToFavorites = async () => {
        dispatch(fetchFavoritesAdd(product.id));
        setIsFavorites(true);
    };

    const deleteFromFavorites = async () => {
        dispatch(fetchFavoritesDelete(product.id));
        setIsFavorites(false);
    };

    const onClickButtonFavorites = () => {
        if (isFavorties) {
            deleteFromFavorites();
        } else {
            sendToFavorites();
        }
    };

    useEffect(() => {}, []);

    return (
        <div className='product-card'>
            <Link
                to={`${PRODUCT_PAGE_URL}/${product.id.toString()}`}
                className='product-card__link'
            >
                <img
                    src={useFirstImage(product.images)}
                    alt=''
                    className='product-card__img'
                />
                <h3 className='product-card__brand'>{product.brand.name}</h3>
                <p className='product-card__name'>{product.category.name}</p>
                <p className='product-card__name'>{product.name}</p>
                <div className='product-card__price'>{product.price} ₽</div>
                <div className='product-card__overlay'></div>
            </Link>
            <div className='product-card__buttons'>
                <button
                    onClick={onClickButtonFavorites}
                    className={cn('product-card__btn product-card__btn-star', {
                        favorites: isFavorties
                    })}
                >
                    <IoIosStar size={24} />
                </button>
                <button
                    onClick={setVisableModal}
                    className='product-card__btn product-card__btn-search'
                >
                    <FiSearch size={23} />
                </button>
            </div>
            {sizeVisable && (
                <div className='product-card__sizes'>
                    <div className='product-card__sizes card-sizes'>
                        <h4 className='card-sizes__title'>Доступные размеры</h4>
                        <p className='card-sizes__text'>
                            {sizes.join(' EU, ')} EU
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductItem;
