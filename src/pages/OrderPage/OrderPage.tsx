import React, { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { IOrderModel } from '../../models/Models/Cart/OrderModel';
import AsideAccount from '../../shared/AsideAccount/AsideAccount';
import Modal from '../../UI/Modal/Modal';
import TitleMain from '../../UI/TitleMain/TitleMain';
import OrderItem from './components/OrderItem/OrderItem';
import OrderModal from './components/OrderModal/OrderModal';
import './OrderPage.scss';

const OrderPage: FC = () => {
    const { orders, isLoading } = useAppSelector(state => state.orderReducer);
    const [activeModal, setActiveModal] = useState<boolean>(false);
    const [orderItemModal, setOrderItemModal] = useState<IOrderModel | null>();

    const onClickSetOrderModal = (item: IOrderModel) => {
        setOrderItemModal(item);
        setActiveModal(true);
    };

    const closeModal = () => {
        setActiveModal(false);

        setTimeout(() => {
            setOrderItemModal(null);
        }, 300);
    };

    return (
        <div className='order-page'>
            <div className='order-page__container container'>
                <div className='order-page__content'>
                    <TitleMain text='Заказы' location='left' />
                    <ul className='order-page__list'>
                        {orders.length >= 0 &&
                            orders.map(item => (
                                <li onClick={() => onClickSetOrderModal(item)} key={item._id} className='order-page__item'>
                                    <OrderItem item={item} />
                                </li>
                            ))}
                    </ul>
                </div>
                <AsideAccount />
            </div>
            <Modal setVisable={setActiveModal} visable={activeModal}>
                {orderItemModal && <OrderModal closeModal={closeModal} order={orderItemModal!} />}
            </Modal>
        </div>
    );
};

export default OrderPage;
