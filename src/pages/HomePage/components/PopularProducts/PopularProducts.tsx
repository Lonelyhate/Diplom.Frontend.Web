import React, { FC, useEffect } from "react";
import "./PopularProducts.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { fetchProductAll } from "../../../../store/reducers/Product/Creators/ProductCreator";
import TitleMain from "../../../../UI/TitleMain/TitleMain";
import ProductSlider from "../ProductSlider/ProductSlider";

const PopularProducts: FC = () => {
  const dispatch = useAppDispatch()
  const { products } = useAppSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(fetchProductAll());
  }, []);

  return (
    <section className='popular-products'>
      <TitleMain text='Популярные продукты' location='center' />
      <ProductSlider items={products} />
    </section>
  );
};

export default PopularProducts;
