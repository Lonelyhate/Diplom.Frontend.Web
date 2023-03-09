import React, { FC, useEffect } from "react";
import TitleMain from "../../../../UI/TitleMain/TitleMain";
import "./NewProducts.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import {
  fetchProductAll,
  fetchProductNewGet
} from "../../../../store/reducers/Product/Creators/ProductCreator";
import ProductSlider from "../ProductSlider/ProductSlider";

const NewProducts: FC = () => {
  const { productsNew, isLoading } = useAppSelector(
    (state) => state.productNewReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductNewGet());
  }, []);

  return (
    <section className='new-products'>
      <TitleMain text='Новые поступления' location='center' />
      <ProductSlider items={productsNew} />
    </section>
  );
};

export default NewProducts;
