import React, { FC, useState, useRef } from 'react';
import ButtonMain from '../../../../UI/ButtonMain/ButtonMain';
import TitleMain from '../../../../UI/TitleMain/TitleMain';
import AddProduct from '../AddProduct/AddProduct';
import AsideAdmin from '../AsideAdmin/AsideAdmin';
import ProductAdminList from '../ProductAdminList/ProductAdminList';
import './AdminProduct.scss';
import Notify from '../../../../UI/Notify/Notify';

const AdminProduct: FC = () => {
    const [visableAddProduct, setVisableProduct] = useState<boolean>(false);
    const [visableNotify, setVisableNotify] = useState<boolean>(false)
    return (
        <section className='admin-product'>
            <div className='admin-product__container container'>
                <AsideAdmin />
                <div className='admin-product__content'>
                    <div className='admin-product__header'>
                        <TitleMain marginLeft={20}  text='Товар' location='center' />
                        <ButtonMain
                            location='right'
                            id='addProduct'
                            backGround='primary'
                            text={'Добавить'}
                            onClick={() => {
                                setVisableProduct(true);
                            }}
                            width={120}
                        />
                    </div>
                    <ProductAdminList />
                </div>
            </div>
            <AddProduct notify={visableNotify} setNotify={setVisableNotify} closeModal={() => setVisableProduct(false)} visable={visableAddProduct} />
            <Notify text='Товар добавлен' visable={visableNotify} setVisable={setVisableNotify} />
        </section>
    );
};

export default AdminProduct;
