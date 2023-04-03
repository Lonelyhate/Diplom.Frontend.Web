import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/redux';
import Spinner from '../../UI/Spinner/Spinner';
import './OrderSuccessPage.scss';
import { SlSocialDropbox } from 'react-icons/sl';
import ButtonMain from '../../UI/ButtonMain/ButtonMain';
import { useNavigate } from 'react-router-dom';
import { ORDERS_URL } from '../../models/urls';

const OrderSuccessPage: FC = () => {
    const { isLoading, orders } = useAppSelector(state => state.orderReducer);
    const navigate = useNavigate();
    return (
        <div className='order-success'>
            <div className='order-success__container container'>
                {isLoading ? (
                    <div className='order-success__loading'>
                        <Spinner color='black' />
                    </div>
                ) : (
                    <div className='order-success__content'>
                        {orders.length > 0 && (
                            <>
                                <SlSocialDropbox size={80} className='order-success__img' />
                                <h3 className='order-success__number'>Ваш заказ {orders[orders.length - 1]._id} успешно создан</h3>
                                <div className='order-success__btns'>
                                    <ButtonMain
                                        width={220}
                                        marginRight={5}
                                        backGround='gray'
                                        onClick={() => {
                                            navigate(ORDERS_URL);
                                        }}
                                        text={'Посмотреть заказ в аккаунте'}
                                    />
                                    <ButtonMain width={170} backGround='gray' text={'Перейти к новинкам'} onClick={() => {}} />
                                </div>
                                <p className='order-success__descr'>
                                    В ближайшее время с вами свяжется менеджер нашего магазина для подтверждения заказа. <br />
                                    Если у вас есть какие-либо вопросы свяжитесь с нами по телефонам: +7 (495) 544 57 70, +7 (800) 775 28 34
                                </p>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderSuccessPage;
