import React, {FC, useState} from 'react';
import "./ProductInfo.scss";
import {IProduct} from "../../../../models/Product/Product";
import ButtonMain from "../../../../UI/ButtonMain/ButtonMain";
import {IoStarSharp} from "react-icons/io5"
import {BiPlus} from "react-icons/bi"

interface IProductInfo {
    product: IProduct
}

const ProductInfo: FC<IProductInfo> = ({product}) =>  {
    const sizes = product.sizes.split(';');
    const [activeSize, setActiveSeize] = useState<string>(sizes[0]);

    return (
        <div className="product-info" >
            <h2 className="product-info__brand">{product.brand.name}</h2>
            <h3 className="product-info__name">{product.category.name} x {product.name}</h3>
            <span className="product-info__available-siezes">Доступные размеры</span>
            <ul className="product-info__sizes">
                {sizes.map(item => (
                    <li key={item} className="product-info__item">
                        <ButtonMain fontSize={12} width={68} height={32} backGround={activeSize == item ? "primary" : "gray"} text={item + " EU"} onClick={() => {setActiveSeize(item)}} />
                    </li>
                ))}
            </ul>
            <div className="product-info__price">{product.price.toLocaleString()} ₽</div>
            <ButtonMain maringBottom={"24px"} height={56} text={["Добавить в корзину", activeSize + " EU"]} onClick={() => {}} />
            <ButtonMain maringBottom={"1px"} height={56} backGround={"gray"} text={"Заказ в один клик"} onClick={() => {}} />
            <ButtonMain maringBottom={"24px"} height={56} backGround={"gray"} text={"Заказ по телефону"} onClick={() => {}} />
            <ul className="product-info__bottom-info bottom-info">
                <li className="bottom-info__item">
                    <span className="bottom-info__top">Артикул</span>
                    <span className="bottom-info__bot">GY4977</span>
                </li>
                <li className="bottom-info__item">
                    <span className="bottom-info__top">Код товара</span>
                    <span className="bottom-info__bot">{product.codeProduct}</span>
                </li>
                <li className="bottom-info__item">
                    <button className="bottom-info__btn">Таблица размеров</button>
                </li>
                <li className="bottom-info__item">
                    <button className="bottom-info__btn">Таблица размеров <IoStarSharp/></button>
                </li>
                <li className="bottom-info__item">
                    <button className="bottom-info__btn">Описание <BiPlus/></button>
                </li>
                <li className="bottom-info__item">
                    <button className="bottom-info__btn">Доставка и оплата</button>
                </li>
                <li className="bottom-info__item">
                    <button className="bottom-info__btn">Возврат</button>
                </li>
            </ul>
            <ButtonMain height={48} backGround={"gray"} text={"Больше от " + product.brand.name} onClick={() => {}}/>
        </div>
    );
};

export default ProductInfo;