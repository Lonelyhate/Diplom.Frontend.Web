import React, { FC, useEffect } from "react";
import "./ProductAdminList.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { fetchProductAll } from "../../../../store/reducers/Product/Creators/ProductCreator";
import ProductAdminItem from "../ProductAdminItem/ProductAdminItem";

const ProductAdminList: FC = () => {
  const dispacth = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(
    (state) => state.productReducer
  );

  useEffect(() => {
    dispacth(fetchProductAll());
  }, []);

  return (
    <ul className='product-list'>
      {products.map((item) => (
        <li key={item.id} className='product-list__item'>
          <ProductAdminItem product={item} />
        </li>
      ))}
    </ul>
  );
};

export default ProductAdminList;
