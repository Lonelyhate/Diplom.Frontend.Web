import React, { FC } from "react";
import "./DiscountPage.scss";
import AsideAccount from "../../shared/AsideAccount/AsideAccount";
import DiscountCard from "./components/DiscountCard/DiscountCard";

const DiscountPage: FC = () => {
  return (
    <div className='discount-page'>
      <div className='discount-page__container container'>
        <DiscountCard isTitle={true} width={540} />
        <AsideAccount />
      </div>
    </div>
  );
};

export default DiscountPage;
