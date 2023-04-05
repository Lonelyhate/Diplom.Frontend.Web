import React, { FC, useState, useRef } from "react";
import ButtonMain from "../../../../UI/ButtonMain/ButtonMain";
import TitleMain from "../../../../UI/TitleMain/TitleMain";
import AddProduct from "../AddProduct/AddProduct";
import AsideAdmin from "../AsideAdmin/AsideAdmin";
import ProductAdminList from "../ProductAdminList/ProductAdminList";
import "./AdminProduct.scss";

const AdminProduct: FC = () => {
  const [visableAddProduct, setVisableProduct] = useState<boolean>(false);

  return (
    <section className='admin-product'>
      <div className='admin-product__container container'>
        <AsideAdmin/>
        <div className="admin-product__content">
          <TitleMain text="Товар" location="center" />
          <div className="admin-product__header">
            <p className="admin-product__sort">Сортировка</p>
            <ButtonMain id="addProduct" backGround="primary" text={"Добавить"} onClick={() => {setVisableProduct(true)}} width={120}/>
          </div>
          <ProductAdminList/>
        </div>
      </div>
      <AddProduct closeModal={() => setVisableProduct(false)} visable={visableAddProduct} />
    </section>
  );
};

export default AdminProduct;
