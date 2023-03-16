import React, { FC } from 'react';
import './CartItem.scss';
import { Link } from 'react-router-dom';
import { PRODUCT_API_ADDRESS } from '../../Env';
import { IProductCart } from '../../models/API/CartApi/CartModels';
import ButtonMain from '../../UI/ButtonMain/ButtonMain';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import {
    fetchMinusProductCart,
    fetchPlusProductCart
} from '../../store/reducers/Cart/Creators/CartCreator';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

interface ICartItem {
    product: IProductCart;
}

const CartItem: FC<ICartItem> = ({ product }) => {
    const disptach = useAppDispatch();
    const { isLoadingPlus, isLoadingMinus } = useAppSelector(
        state => state.cartReducer
    );

    const onPlusProduct = () => {
        disptach(fetchPlusProductCart(product.id, Number(product.size)));
    };

    const onMinusProduct = () => {
        disptach(fetchMinusProductCart(product.id, Number(product.size)));
    };

    return (
        <div className='cart-item'>
            <Link className='cart-item__link' to={product.id + ''}>
                <img
                    src={PRODUCT_API_ADDRESS + product.images.split(';')[0]}
                    alt=''
                />
            </Link>
            <div className='cart-item__text'>
                <div className='cart-item__text-container'>
                    <h4 className='cart-item__brand'>{product.brand}</h4>
                    <div className='cart-item__name'>
                        {product.category} x {product.name}
                    </div>
                </div>
                <div className='cart-item__bottom'>
                    <div className='cart-item__btns'>
                        <ButtonMain
                            fontSize={'1.7rem'}
                            sizeSpinner={17}
                            widthBorder={2}
                            width={32}
                            height={32}
                            borderRadius={'100%'}
                            onClick={onMinusProduct}
                            text={AiOutlineMinus}
                            backGround='gray'
                            isLoading={isLoadingMinus}
                        />
                        <span className='cart-item__product-count'>
                            {product.count}
                        </span>
                        <ButtonMain
                            isLoading={isLoadingPlus}
                            sizeSpinner={17}
                            widthBorder={2}
                            fontSize={'1.7rem'}
                            width={32}
                            height={32}
                            borderRadius={'100%'}
                            onClick={onPlusProduct}
                            text={AiOutlinePlus}
                            backGround='gray'
                        />
                    </div>
                    <h3 className='cart-item__size'>{product.size} EU</h3>
                </div>
            </div>
            <div className='cart-item__price'>
                {product.price.toLocaleString()} ₽
            </div>
        </div>
    );
};

export default CartItem;
