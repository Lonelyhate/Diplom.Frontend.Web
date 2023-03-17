import React, { FC } from 'react';
import './ModalContentProduct.scss';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { IProduct } from '../../models/Models/Product/Product';
import { RxCross1 } from 'react-icons/rx';
import ButtonMain from '../../UI/ButtonMain/ButtonMain';
import ModalContentImages from './ModalContentImages/ModalContentImages';
import ModalContentInfo from './ModalContentInfo/ModalContentInfo';
import { useAppDispatch } from '../../hooks/redux';
import {
    setModalProductVisable,
    setProductForModal
} from '../../store/reducers/Product/Creators/ProductCreator';
import { PRODUCT_PAGE_URL } from '../../models/urls';

interface IModalContentProduct {
    product: IProduct;
}

const ModalContentProduct: FC<IModalContentProduct> = ({ product }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const toPageProduct = () => {
        navigate(PRODUCT_PAGE_URL + '/' + product.id.toString());
        closeModal();
    };

    const closeModal = () => {
        dispatch(setModalProductVisable(false));
        dispatch(setProductForModal(null));
    };

    return (
        <div className='modal-product'>
            <div className='modal-product__header'>
                <ButtonMain
                    text={'Перейти на страницу товара'}
                    onClick={toPageProduct}
                    backGround='gray'
                    height={32}
                    width={199}
                    fontSize={'1.2rem'}
                />
                <div className='modal-product__middle'>
                    <h3 className='modal-product__brand'>
                        {product.brand.name}
                    </h3>
                    <h3 className='modal-product__name'>
                        {product.category.name} {product.name}
                    </h3>
                </div>
                <button onClick={closeModal} className='modal-product__close'>
                    <RxCross1 size={20} />
                </button>
            </div>
            <div className='modal-product__content'>
                <ModalContentImages images={product.images} />
                <ModalContentInfo product={product} />
            </div>
        </div>
    );
};

export default ModalContentProduct;
