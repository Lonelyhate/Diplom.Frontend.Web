import React, {FC, useEffect, useRef, useState} from 'react';
import "./ProductPage.scss";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchProductById} from "../../store/reducers/Product/Creators/ProductCreator";
import ProductImages from "./components/ProductImages/ProductImages";
import ProductInfo from "./components/ProductInfo/ProductInfo";

const ProductPage: FC = () => {
    const dispatch = useAppDispatch()
    const {product, isLoading} = useAppSelector(state => state.productReducer)
    const id = useParams<{id: string}>().id;

    useEffect(() => {
        dispatch(fetchProductById(id!));

        return () => {}
    },[])

    return (
        <div className={"product-page"} >
            <div className="product-page__container container">
                <div className="product-page__content">
                    {product && <>
                        <ProductImages product={product}/>
                        <ProductInfo product={product} />
                    </>}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;