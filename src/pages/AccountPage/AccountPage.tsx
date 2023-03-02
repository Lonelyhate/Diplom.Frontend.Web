import React, { FC } from "react";
import "./AccountPage.scss";
import AccountInfo from "./components/AccountInfo/AccountInfo";
import AsideAccount from "../../shared/AsideAccount/AsideAccount";

const AccountPage: FC = () => {
  return (
    <div className='account-page'>
      <div className='account-page__container container'>
        <AccountInfo />
        <AsideAccount />
      </div>
    </div>
  );
};

export default AccountPage;
