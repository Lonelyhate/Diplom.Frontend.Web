import React, { FC } from "react";
import TitleMain from "../../UI/TitleMain/TitleMain";
import "./AdminPage.scss";
import AsideAdmin from "./Components/AsideAdmin/AsideAdmin";

const AdminPage: FC = () => {
  return (
    <section className='admin-page'>
      <div className='admin-page__container container'>
        <TitleMain text='Админ-панель' location='center' />
        <div className='admin-page__content'>
          <AsideAdmin />
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
