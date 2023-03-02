import React, { FC } from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import { useFirstImage } from "../../hooks/images";
import { IProduct } from "../../models/Product/Product";
import { IoIosStar } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

interface IProductItem {
  product: IProduct;
}

const ProductItem: FC<IProductItem> = ({ product }) => {
  return (
    <div className='product-card'>
      <Link to={product.id.toString()} className='product-card__link'>
        <img
          src={useFirstImage(product.images)}
          alt=''
          className='product-card__img'
        />
        <h3 className='product-card__brand'>{product.brand.name}</h3>
        <p className='product-card__name'>{product.category.name}</p>
        <p className='product-card__name'>{product.name}</p>
        <div className='product-card__price'>{product.price} ₽</div>
        <div className='product-card__overlay'></div>
      </Link>
      <div className='product-card__buttons'>
        <button className='product-card__btn product-card__btn-star'>
          <IoIosStar size={24} />
        </button>
        <button className='product-card__btn product-card__btn-search'>
          <FiSearch size={23} />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
