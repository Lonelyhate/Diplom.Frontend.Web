import React, { FC, useEffect } from 'react';
import './CartPopup.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
    fetchCart,
    fetchDeleteAllProductsCart
} from '../../../store/reducers/Cart/Creators/CartCreator';
import TitleMain from '../../../UI/TitleMain/TitleMain';
import ButtonMain from '../../../UI/ButtonMain/ButtonMain';
import { BsTrash } from 'react-icons/bs';
import CartItem from '../../CartItem/CartItem';
import { loadavg } from 'os';
import { useLocation, useNavigate } from 'react-router-dom';
import { CHECKOUT_PAGE_URL } from '../../../models/urls';

const CartPopup: FC = () => {
    const navigation = useNavigate();
    const dispatch = useAppDispatch();
    const { cart, error, isLoading, isLoadingPlus, isLoadingMinus } =
        useAppSelector(state => state.cartReducer);

    const onDeletedAllProducts = () => {
        dispatch(fetchDeleteAllProductsCart());
    };

    useEffect(() => {
        dispatch(fetchCart());
    }, []);

    const onToCheckout = () => {
        navigation(CHECKOUT_PAGE_URL)
    }

    return (
        <>
            {cart ? (
                !isLoading && cart.products.length > 0 ? (
                    <>
                        <div className='cart-popup__header'>
                            <div className='cart-popup__header-middle'>
                                <h3 className='cart-popup__title'>Корзина</h3>
                                <h4 className='cart-popup__subtitle'>
                                    {cart.countProducts}{' '}
                                    {cart.countProducts == 1
                                        ? 'Товар'
                                        : 'Товара'}
                                </h4>
                            </div>
                            <button className='cart-popup__delete-all'>
                                <BsTrash
                                    onClick={onDeletedAllProducts}
                                    size={22}
                                />
                            </button>
                        </div>
                        <ul className='cart-popup__list'>
                            {cart.products.map(item => (
                                <li
                                    key={item.id + item.size}
                                    className='cart-popup__item'
                                >
                                    <CartItem product={item} />
                                </li>
                            ))}
                        </ul>
                        <ButtonMain
                            isLoading={isLoadingPlus && isLoadingPlus}
                            height={48}
                            maringBottom='0.8rem'
                            onClick={onToCheckout}
                            text={`Оформить заказ на ${cart.amount.toLocaleString()} ₽`}
                        />
                        <ButtonMain
                            maringBottom='2.4rem'
                            height={48}
                            onClick={() => {}}
                            text={'Заказ в один клик'}
                            backGround='gray'
                        />
                    </>
                ) : (
                    <>
                        <TitleMain
                            marginTop={'2.2rem'}
                            text='Корзина'
                            location='center'
                        />
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
