import React, { FC } from "react";
import "./DeliveryInfo.scss";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { SHIPPING_FAQ_URL } from "../../../../models/urls";

interface IDeliveryInfo {
    closeModal: (value: boolean) => void;
}

const DeliveryInfo: FC<IDeliveryInfo> = ({ closeModal }) => {
    return (
        <div className='delivery-info'>
            <div className='delivery-info__header'>
                <h3 className='delivery-info__title'>Доставка и оплата</h3>
                <button
                    onClick={() => closeModal(false)}
                    className='delivery-info__cancel'
                >
                    <RxCross2 size={25} />
                </button>
            </div>
            <div className='delivery-info__content'>
                <h3 className='delivery-info__subtitle'>ДОСТАВКА ПО МОСКВЕ</h3>
                <p className='delivery-info__text bold'>
                    - При покупке от 15000 рублей - бесплатная доставка курьером
                    по Москве
                </p>
                <p className='delivery-info__text'>
                    - Курьером по Москве (стоимость 350 рублей, срок доставки
                    1-3 дня, примерка)
                </p>
                <p className='delivery-info__text'>
                    - Курьером СДЭК по Москве, в пределах МКАД (стоимость 350
                    рублей, срок доставки 2-3 дня, примерка)
                </p>
                <p className='delivery-info__text'>
                    - Курьером до метро за МКАД (стоимость 350 рублей, срок
                    доставки 1-3 дня, примерка)
                </p>
                <p className='delivery-info__text'>
                    - Курьером СДЭК за МКАД (стоимость 600 рублей, срок доставки
                    ориентировочно 3-4 рабочих дня, примерка)
                </p>
                <p className='delivery-info__text'>
                    - Стоимость доставки игрушек в размере 1000% указана в
                    разделе{" "}
                    <Link className='delivery-info__link' to={SHIPPING_FAQ_URL}>
                        "Доставка и Оплата"
                    </Link>
                    .
                </p>
                <h3 className='delivery-info__subtitle'>ДОСТАВКА ПО РОССИИ</h3>
                <p className='delivery-info__text bold'>
                    - При покупке от 8000 рублей - бесплатная доставка Почтой
                    России
                </p>
                <p className='delivery-info__text'>
                    - Почта России (стоимость – 490 рублей, ориентировочно 4-14
                    рабочих дней)
                </p>
                <p className='delivery-info__text'>
                    - Курьерская служба СДЭК (стоимость - 690 рублей,
                    ориентировочно 2-5 рабочих дней)
                </p>
                <p className='delivery-info__text'>
                    - EMS Почта России (стоимость – 890 рублей, ориентировочно
                    2-7 рабочих дней)
                </p>
                <h3 className='delivery-info__subtitle'>
                    ДОСТАВКА В БЕЛАРУСЬ И КАЗАХСТАН
                </h3>
                <p className='delivery-info__text'>
                    - СДЭК Беларусь (стоимость – 690 рублей, ориентировочно 2-5
                    рабочих дней)
                </p>
                <p className='delivery-info__text'>
                    - СДЭК Казахстан (стоимость – 1100 рублей, ориентировочно
                    11-17 рабочих дней)
                </p>
                <p className='delivery-info__text'>
                    Более подробная информация в разделе{" "}
                    <Link className='delivery-info__link' to={SHIPPING_FAQ_URL}>
                        Доставка
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default DeliveryInfo;
