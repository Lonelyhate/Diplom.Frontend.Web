import React, { FC } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { EXCHANGE_FAQ_URL } from "../../../../models/urls";
import "./ReturnInfo.scss";

interface IReturnInfo {
    closeModal: (value: boolean) => void;
}

const ReturnInfo: FC<IReturnInfo> = ({ closeModal }) => {
    return (
        <div className='delivery-info'>
            <div className='delivery-info__header'>
                <h3 className='delivery-info__title'>Возврат</h3>
                <button
                    onClick={() => closeModal(false)}
                    className='delivery-info__cancel'
                >
                    <RxCross2 size={25} />
                </button>
            </div>
            <div className='delivery-info__content'>
                <h3 className='delivery-info__subtitle'>РОЗНИЧНЫЙ МАГАЗИН</h3>
                <p className='delivery-info__text bold'>
                    Возврат товара надлежащего качества осуществляется в течение
                    14 дней в том магазине, где он был приобретен.
                </p>
                <p className='delivery-info__text'>
                    Гарантийный срок на товары составляет 60 дней. Претензии по
                    качеству товара предъявляются в магазине по месту покупки.
                </p>
                <h3 className='delivery-info__subtitle'>ИНТЕРНЕТ-МАГАЗИН</h3>
                <p className='delivery-info__text bold'>
                    Возврат товара, приобретенного в интернет-магазине
                    курьерской доставкой по Москве, осуществляется только по
                    адресу: Москва, Каретный Ряд, дом 8, на кассе магазина.
                </p>
                <p className='delivery-info__text'>
                    Не подошедший товар необходимо отправить нам обратно через
                    Почту России или EMS по адресу 102961, Москва, п.
                    Марушкинское, д. Шарапово, ул. Придорожная, дом 4, стр. 2,
                    кому: ООО «БШ Стор»
                </p>
                <p className='delivery-info__text'>
                    К возврату принимаются изделия в товарном виде: без следов
                    эксплуатации, с заводскими бирками и в оригинальной
                    упаковке.
                </p>
                <p className='delivery-info__text'>
                    Более подробная информация в разделе{" "}
                    <Link className='delivery-info__link' to={EXCHANGE_FAQ_URL}>
                        Доставка
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ReturnInfo;
