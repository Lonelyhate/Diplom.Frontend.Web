import React, { FC, useEffect, useState } from "react";
import TitleMain from "../../../../UI/TitleMain/TitleMain";
import "./NewProducts.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import {
  fetchProductAll,
  fetchProductNewGet
} from "../../../../store/reducers/Product/Creators/ProductCreator";
import ProductSlider from "../ProductSlider/ProductSlider";
import Modal from "../../../../UI/Modal/Modal";
import { IProduct } from "../../../../models/Product/Product";
import ModalContentProduct from "../../../../shared/ModalContentProduct/ModalContentProduct";

const NewProducts: FC = () => {
  const { productsNew, isLoading } = useAppSelector(
    (state) => state.productNewReducer
  );
  const [visableModal, setVisableModal] = useState<boolean>(true)
  const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductNewGet());
  }, []);

  return (
    <section className='new-products'>
      <TitleMain text='Новые поступления' location='center' />
      <ProductSlider items={productsNew} />
      <Modal visable={visableModal} setVisable={setVisableModal} >
        <ModalContentProduct/>
      </Modal>
    </section>
  );
};

export default NewProducts;
