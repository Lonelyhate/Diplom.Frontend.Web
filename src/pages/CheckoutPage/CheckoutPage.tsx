import React, { FC, useState, useEffect } from 'react';
import './CheckoutPage.scss';
import TitleMain from '../../UI/TitleMain/TitleMain';
import InputMain from '../../UI/InputMain/InputMain';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import AddressItem from '../../shared/AddressItem/AddressItem';
import { fetchAddresses } from '../../store/reducers/User/creators/AddressCreator';
import DeliveryMethod, { deliveryMethodTypeItem } from '../../models/Delivery/DeliveryMethod';
import TypePayment, { paymentItem } from '../../models/TypePayment/TypePayment';
import ButtonMain from '../../UI/ButtonMain/ButtonMain';
import cn from 'classnames';
import CartItem from '../../shared/CartItem/CartItem';
import { useNavigate } from 'react-router-dom';
import { ORDER_SUCCESS_URL, PAYTURE_PAGE_URL } from '../../models/urls';
import { IOrderModel } from '../../models/Models/Cart/OrderModel';
import { fetchMakeOrder } from '../../store/reducers/Cart/Creators/OrderCreator';
import { fetchDeleteAllProductsCart } from '../../store/reducers/Cart/Creators/CartCreator';
import { fetchDiscountUpdate } from '../../store/reducers/User/creators/DiscountCreator';

const CheckoutPage: FC = () => {
    const dispatch = useAppDispatch();
    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const { currentUser } = useAppSelector(state => state.userReducer);
    const { addresses } = useAppSelector(state => state.addressReducer);
    const { cart } = useAppSelector(state => state.cartReducer);
    const [activeTypeDelivery, setActiveTypeDelivery] = useState<deliveryMethodTypeItem>(DeliveryMethod.DelvieryArray[0]);
    const [activeTypePayment, setActiveTypePayment] = useState<paymentItem>(TypePayment.ItemsArray[0]);
    const [totalCost, setTotalCost] = useState<number>(0);
    const [comment, setComment] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAddresses());
        if (currentUser?.firstname) {
            setFirstname(currentUser.firstname);
        }
        if (currentUser?.lastname) {
            setLastname(currentUser.lastname);
        }
    }, [currentUser?.firstname, currentUser?.lastname]);

    useEffect(() => {
        if (cart) {
            setTotalCost(cart.amount + activeTypeDelivery.price);
        }
    }, [cart?.amount, activeTypeDelivery.price]);

    const onClickDeliveryMethod = (item: deliveryMethodTypeItem) => {
        setActiveTypeDelivery(item);
    };

    const onClickPaymentMethod = (item: paymentItem) => {
        setActiveTypePayment(item);
    };

    const onClickToPayment = () => {
        const url = PAYTURE_PAGE_URL + '/';
        switch (activeTypePayment) {
            case TypePayment.Payture:
                navigate(url + 'payture');
                break;
            case TypePayment.Yandex:
                navigate(url + 'yandex');
                break;
            case TypePayment.Sber:
                navigate(url + 'sber');
                break;
            default:
                onClickMakeOrder();
                break;
        }
    };

    const onClickMakeOrder = () => {
        const request: IOrderModel = {
            firstname: firstname,
            lastname: lastname,
            address: addresses.find(a => a.isActiveAddress)!.address,
            amount: totalCost,
            date: new Date(),
            deliveryType: activeTypeDelivery.name,
            comment: comment,
            paymentType: activeTypePayment.name,
            cartProduct: cart?.products!,
            numberPhone: currentUser!.phone!
        };
        navigate(ORDER_SUCCESS_URL);
        dispatch(fetchDiscountUpdate(cart?.amount!));
        dispatch(fetchMakeOrder(request));
        dispatch(fetchDeleteAllProductsCart());
    };

    return (
        <div className='checkout-page'>
            <div className='checkout-page__container container'>
                <div className='checkout-page__left'>
                    <TitleMain marginBottom={'2.4rem'} text='Оформление заказа' location='center' style='high' />
                    <h3 className='checkout-page__subtitle'>1. Имя и фамилия</h3>
                    <div className='checkout-page__name'>
                        <div className='checkout-page__top'>
                            <InputMain
                                marginRight={24}
                                value={firstname}
                                setValue={setFirstname}
                                placeholder='Введите имя'
                                labelText='Имя*'
                            />
                            <InputMain value={lastname} setValue={setLastname} placeholder='Введите фамилию' labelText='Фамилия*' />
                        </div>
                        {!(firstname && lastname) && (
                            <p className='checkout-page__warning font_sm'>Эти данные необходимы для получения и оформления заказа</p>
                        )}
                    </div>
                    <h3 className='checkout-page__subtitle'>2. Адреса</h3>
                    <p className='checkout-page__address-text font_sm '>Куда доставить?</p>
                    <ul className='checkout-page__addresses'>
                        {addresses.length > 0 &&
                            addresses.map(item => (
                                <li key={item.id} className='checkout-page__address-item'>
                                    {<AddressItem item={item} isBtns={false} />}
                                </li>
                            ))}
                    </ul>
                    <h3 className='checkout-page__subtitle'>3. Способ доставки</h3>
                    <ul className='checkout-page__delivery delivery'>
                        {DeliveryMethod.DelvieryArray.map(item => (
                            <li
                                onClick={() => onClickDeliveryMethod(item)}
                                key={item.name}
                                className={cn('delivery__item', {
                                    active: activeTypeDelivery == item
                                })}
                            >
                                <div className='delivery__content'>
                                    <div className='delivery__left'>
                                        <span className='delivery__circle'></span>
                                        <div className='delivery__text'>
                                            <h4 className='delivery__name'>{item.name}</h4>
                                            {item.note && <span className='delivery__note'>{item.note}</span>}
                                        </div>
                                    </div>
                                    <img src={item.img} alt='' className='delivery__img' />
                                </div>
                                {item.decription && <p className='delivery__description font_sm'>{item.decription}</p>}
                            </li>
                        ))}
                    </ul>
                    <div className='checkout-page__comment font_m'>Коментарий к заказу (не обязательно)</div>
                    <textarea
                        onChange={e => setComment(e.target.value)}
                        value={comment}
                        className='checkout-page__comment-text'
                        placeholder='Комментарий к заказу...'
                    ></textarea>
                    <h3 className='checkout-page__subtitle'>4. Способ оплаты</h3>
                    <ul className='checkout-page__payments payments'>
                        {TypePayment.ItemsArray.map(item => (
                            <li
                                onClick={() => onClickPaymentMethod(item)}
                                className={cn('payments__item', {
                                    active: activeTypePayment == item
                                })}
                            >
                                <div className='payments__left'>
                                    <span className='payments__circle'></span>
                                    <p className='payments__name'>{item.name}</p>
                                </div>
                                <img src={item.img} alt='' className='payments__img' />
                            </li>
                        ))}
                    </ul>
                    <ButtonMain
                        height={48}
                        onClick={onClickToPayment}
                        text={TypePayment.Cash == activeTypePayment ? 'Подтвердить заказ' : 'Перейти к оплате'}
                    />
                </div>
                <div className='checkout-page__right checkout-right'>
                    <div className='checkout-right__content'>
                        <ul className='checkout-right__list'>
                            {cart &&
                                cart?.products.length > 0 &&
                                cart?.products.map(item => (
                                    <li className='checkout-right__item'>
                                        <CartItem product={item} />
                                    </li>
                                ))}
                        </ul>
                        <div className='checkout-right__bottom'>
                            <div className='checkout-right__amount'>
                                <div className='checkout-right__amount-text'>Сумма</div>
                                <div className='checkout-right__amount-number'>{cart?.amount.toLocaleString()} ₽</div>
                            </div>
                            <div className='checkout-right__amount'>
                                <div className='checkout-right__amount-text'>{activeTypeDelivery.name}</div>
                                <div className='checkout-right__amount-number'>{activeTypeDelivery.price.toLocaleString()} ₽</div>
                            </div>
                            <div className='checkout-right__amount'>
                                <div className='checkout-right__total'>Итого</div>
                                <div className='checkout-right__total'>{totalCost.toLocaleString()} ₽</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
