import React, { FC, useState } from 'react';
import './ModalContentInfo.scss';
import { IProduct } from '../../../models/Product/Product';
import ButtonMain from '../../../UI/ButtonMain/ButtonMain';

interface IModalContentInfo {
    product: IProduct;
}

const ModalContentInfo: FC<IModalContentInfo> = ({ product }) => {
    const sizes: string[] = product.sizes.split(';');
    const [activeSize, setActiveSize] = useState<string>(sizes[0]);

    return (
        <div className='content-info'>
            <h3 className='content-info__size-name'>Доступные размеры</h3>
            <ul className='content-info__sizes'>
                {sizes.map(item => (
                    <li className='conteont-info__sizes-item'>
                        <ButtonMain
                            width={68}
                            height={32}
                            fontSize={'1.2rem'}
                            backGround={activeSize == item ? 'primary' : 'gray'}
                            onClick={() => {
                                setActiveSize(item);
                            }}
                            text={item + ' EU'}
                        />
                    </li>
                ))}
            </ul>
            <div className='content-info__bottom'>
                <div className='content-info__price'>
                    {product.price.toLocaleString()} ₽
                </div>
                <div className='content-info__btns'>
                    <ButtonMain
                        onClick={() => {}}
                        height={56}
                        backGround='gray'
                        text={'Заказ в один клик'}
                        marginRight={"1rem"}
                    />
                    <ButtonMain
                        onClick={() => {}}
                        height={56}
                        backGround='primary'
                        text={['Добавить в корзину', activeSize + ' EU']}
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalContentInfo;