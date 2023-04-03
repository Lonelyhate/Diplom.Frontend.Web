import React, { FC } from 'react';
import './OrderModal.scss';
import { GrClose } from 'react-icons/gr';
import { IOrderModel } from '../../../../models/Models/Cart/OrderModel';
import { PRODUCT_API_ADDRESS } from '../../../../Env';
import DateParse from '../../../../models/Date';

interface IOrderModal {
    order: IOrderModel;
    closeModal: () => void;
}

const OrderModal: FC<IOrderModal> = ({ order, closeModal }) => {
    return (
        <div className='order-modal'>
            <div className='order-modal__header'>
                <h3 className='order-modal__title'>Заказ</h3>
                <button className='order-modal__close'>
                    <GrClose onClick={closeModal} size={20} />
                </button>
            </div>
            <div className='order-modal__content'>
                <div className='order-modal__left'>
                    {order.cartProduct.map(item => (
                        <div className='order-modal__item'>
                            <img src={PRODUCT_API_ADDRESS + item.images.split(';')[0]} alt='' className='order-modal__img' />
                            <div className='order-modal__middle'>
                                <h4 className='order-modal__brand'>{item.brand}</h4>
                                <p className='order-modal__name'>{item.name}</p>
                                <div className='order-modal__middle-bottom'>
                                    <div className='order-modal__count'>x{item.count}</div>
                                    <div className='order-modal__size'>{item.size} EU</div>
                                </div>
                            </div>
                            <div className='order-modal__item-price'>{item.price.toLocaleString()} ₽</div>
                        </div>
                    ))}
                </div>
                <div className='order-modal__right'>
                    <div className='order-modal__row'>
                        <div className='order-modal__row-item'>
                            <div className='order-modal__row-name'>Номер заказа</div>
                            <div className='order-modal__row-value'>{order._id}</div>
                        </div>
                        <div className='order-modal__row-item'>
                            <div className='order-modal__row-name'>Дата оформления</div>
                            <div className='order-modal__row-value'>{new DateParse(order.date.toString()).GetDate()}</div>
                        </div>
                    </div>
                    <div className='order-modal__row'>
                        <div className='order-modal__row-item'>
                            <div className='order-modal__row-name'>Сумма заказа</div>
                            <div className='order-modal__row-value'>{order.amount} ₽</div>
                        </div>
                        <div className='order-modal__row-item'>
                            <div className='order-modal__row-name'>Статус</div>
                            <div className='order-modal__status'>{order.status}</div>
                        </div>
                    </div>
                    <div className='order-modal__row'>
                        <div className='order-modal__row-item row-full'>
                            <div className='order-modal__row-name'>Способ оплаты</div>
                            <div className='order-modal__row-value'>{order.paymentType}</div>
                        </div>
                    </div>
                    <div className='order-modal__row'>
                        <div className='order-modal__row-item row-full'>
                            <div className='order-modal__row-name'>Адрес доставки</div>
                            <div className='order-modal__row-value'>{order.address}</div>
                        </div>
                    </div>
                    <div className='order-modal__row '>
                        <div className='order-modal__row-item row-full'>
                            <div className='order-modal__row-name'>Способ доставки</div>
                            <div className='order-modal__row-value'>{order.deliveryType}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;
