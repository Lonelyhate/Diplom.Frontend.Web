import React, { FC } from "react";
import "./ProductAdminItem.scss";
import { Link } from "react-router-dom";
import { IProduct } from "../../../../models/Product/Product";

interface IProductAdminItem {
  product: IProduct;
}

const ProductAdminItem: FC<IProductAdminItem> = ({ product }) => {
    const img: string = product.images.split(";")[0];
  return (
    <Link to={product.id.toString()} className='product-item'>
      <img src={`https://localhost:7081/${img}`} alt="" className="product-item__img" />
      <h3 className="product-item__title">{product.brand.name}</h3>
      <p className="product-item__descr">{product.name}</p>
      <div className="product-item__price">{product.price} ₽</div>
    </Link>
  );
};

export default ProductAdminItem;
