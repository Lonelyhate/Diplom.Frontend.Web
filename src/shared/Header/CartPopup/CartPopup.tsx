import React, { FC, useEffect } from 'react';
import './CartPopup.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchCart } from '../../../store/reducers/Cart/Creators/CartCreator';
import TitleMain from '../../../UI/TitleMain/TitleMain';
import ButtonMain from '../../../UI/ButtonMain/ButtonMain';

const CartPopup: FC = () => {
    const dispatch = useAppDispatch();
    const { cart, error, isLoading } = useAppSelector(
        state => state.cartReducer
    );

    useEffect(() => {
        dispatch(fetchCart());
    }, []);

    return (
        <>
            {cart ? (
                cart.products.length > 0 ? (
                    <div>Товара больше 1</div>
                ) : (
                    <>
                        <TitleMain text='Корзина' location='center' />
                        <p className='cart-popup__empty'>
                            Вы пока что еще ничего не добавили в корзину
                        </p>
                        <ButtonMain
                            height={48}
                            maringBottom='2rem'
                            width={170}
                            onClick={() => {}}
                            backGround='gray'
                            location='center'
                            text='Перейти к новинкам'
                        />
                    </>
                )
            ) : (
                <div>Не аворизован</div>
            )}
        </>
    );
};

export default CartPopup;
