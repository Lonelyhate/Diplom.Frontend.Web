import React, { FC, useEffect } from 'react';
import './CartPopup.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchCart } from '../../../store/reducers/Cart/Creators/CartCreator';
import TitleMain from '../../../UI/TitleMain/TitleMain';
import ButtonMain from '../../../UI/ButtonMain/ButtonMain';
import { BsTrash } from 'react-icons/bs';
import CartItem from '../../CartItem/CartItem';

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
                                <BsTrash size={22} />
                            </button>
                        </div>
                        <ul className='cart-popup__list'>
                            {cart.products.length > 0 && cart.products.map(item => (
                                <li
                                    key={item.id}
                                    className='cart-popup__item'
                                >
                                    <CartItem  product={item} />
                                </li>
                            ))}
                        </ul>
                        <ButtonMain height={48} maringBottom='0.8rem' onClick={() => {}} text={`Оформить заказ на ${cart.amount.toLocaleString()} ₽`} />
                        <ButtonMain maringBottom='2.4rem' height={48} onClick={() => {}} text={"Заказ в один клик"} backGround='gray' />
                    </>
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
