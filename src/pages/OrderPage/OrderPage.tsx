import React, { FC } from "react";
import AsideAccount from "../../shared/AsideAccount/AsideAccount";
import TitleMain from "../../UI/TitleMain/TitleMain";
import "./OrderPage.scss";

const OrderPage: FC = () => {
  return (
    <div className='order-page'>
      <div className='order-page__container container'>
        <div className='order-page__content'>
          <TitleMain text="Заказы" location="left" />
        </div>
        <AsideAccount />
      </div>
    </div>
  );
};

export default OrderPage;
