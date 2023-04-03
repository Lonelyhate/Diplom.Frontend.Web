import React, { FC, useState } from 'react';
import { PRODUCT_API_ADDRESS } from '../../../../Env';
import DateParse from '../../../../models/Date';
import { IOrderModel } from '../../../../models/Models/Cart/OrderModel';
import Modal from '../../../../UI/Modal/Modal';
import './OrderItem.scss';

interface IOrderItem {
    item: IOrderModel;
}

const OrderItem: FC<IOrderItem> = ({ item }) => {
    const date = new DateParse(item.date.toString()).GetDate();

    return (
        <div className='order-item'>
            <div className='order-item__header'>
                {item.cartProduct.map(cp => (
                    <img className='order-item__img' src={PRODUCT_API_ADDRESS + cp.images.split(";")[0]} alt='' />
                ))}
            </div>
            <div className='order-item__bottom'>
                <div className='order-item__column'>
                    <div className='order-item__name'>Номер заказа</div>
                    <div className='order-item__value'>{item._id}</div>
                </div>
                <div className='order-item__column'>
                    <div className='order-item__name'>Дата оформления</div>
                    <div className='order-item__value'>{date}</div>
                </div>
                <div className='order-item__column'>
                    <div className='order-item__name'>Сумма заказа</div>
                    <div className='order-item__value'>{item.amount.toLocaleString()} ₽</div>
                </div>
                <div className='order-item__column'>
                    <div className='order-item__name'>Статус</div>
                    <div className='order-item__status'>{item.status}</div>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;
