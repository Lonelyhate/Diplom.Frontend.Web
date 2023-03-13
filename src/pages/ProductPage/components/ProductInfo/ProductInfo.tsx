import React, { FC, useState } from 'react';
import './ProductInfo.scss';
import { IProduct } from '../../../../models/Product/Product';
import ButtonMain from '../../../../UI/ButtonMain/ButtonMain';
import { IoStarSharp } from 'react-icons/io5';
import { BiPlus } from 'react-icons/bi';
import Modal from '../../../../UI/Modal/Modal';
import SizesTable from '../SizesTable/SizesTable';
import cn from 'classnames';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';
import ReturnInfo from '../ReturnInfo/ReturnInfo';

interface IProductInfo {
    product: IProduct;
    isFavorites: boolean;
    addToFavorites: () => void;
    deleteFromFavorites: () => void;
}

const ProductInfo: FC<IProductInfo> = ({
    product,
    isFavorites,
    addToFavorites,
    deleteFromFavorites
}) => {
    const sizes = product.sizes.split(';');
    const [activeSize, setActiveSeize] = useState<string>(sizes[0]);
    const [activeModalSize, setActiveModalSize] = useState<boolean>(false);
    const [activeDescr, setActiveDescr] = useState<boolean>(false);
    const [activeDelivery, setActiveDelivery] = useState<boolean>(false);
    const [returnActive, setReturnActive] = useState<boolean>(false);

    return (
        <div className='product-info'>
            <h2 className='product-info__brand'>{product.brand.name}</h2>
            <h3 className='product-info__name'>
                {product.category.name} x {product.name}
            </h3>
            <span className='product-info__available-siezes'>
                Доступные размеры
            </span>
            <ul className='product-info__sizes'>
                {sizes.map(item => (
                    <li key={item} className='product-info__item'>
                        <ButtonMain
                            fontSize={12}
                            width={68}
                            height={32}
                            backGround={activeSize == item ? 'primary' : 'gray'}
                            text={item + ' EU'}
                            onClick={() => {
                                setActiveSeize(item);
                            }}
                        />
                    </li>
                ))}
            </ul>
            <div className='product-info__price'>
                {product.price.toLocaleString()} ₽
            </div>
            <ButtonMain
                maringBottom={'24px'}
                height={56}
                text={['Добавить в корзину', activeSize + ' EU']}
                onClick={() => {}}
            />
            <ButtonMain
                maringBottom={'1px'}
                height={56}
                backGround={'gray'}
                text={'Заказ в один клик'}
                onClick={() => {}}
            />
            <ButtonMain
                maringBottom={'24px'}
                height={56}
                backGround={'gray'}
                text={'Заказ по телефону'}
                onClick={() => {}}
            />
            <ul className='product-info__bottom-info bottom-info'>
                <li className='bottom-info__item'>
                    <span className='bottom-info__top'>Артикул</span>
                    <span className='bottom-info__bot'>GY4977</span>
                </li>
                <li className='bottom-info__item'>
                    <span className='bottom-info__top'>Код товара</span>
                    <span className='bottom-info__bot'>
                        {product.codeProduct}
                    </span>
                </li>
                <li className='bottom-info__item'>
                    <button
                        onClick={() => setActiveModalSize(true)}
                        className='bottom-info__btn'
                    >
                        Таблица размеров
                    </button>
                </li>
                <li className='bottom-info__item'>
                    <button
                        onClick={
                            isFavorites ? deleteFromFavorites : addToFavorites
                        }
                        className='bottom-info__btn'
                    >
                        В избранное{' '}
                        <IoStarSharp
                            color={isFavorites ? '#000' : 'rgba(0, 0, 0, 0.4)'}
                            size={25}
                        />
                    </button>
                </li>
                <li
                    className={cn('bottom-info__item', {
                        activeDescr: activeDescr
                    })}
                >
                    <button
                        onClick={() => {
                            setActiveDescr(!activeDescr);
                        }}
                        className={cn('bottom-info__btn bottom-info__descr', {
                            active: activeDescr
                        })}
                    >
                        Описание <span></span>
                    </button>
                    <p className='bottom-info__descr-text'>
                        {product.description}
                    </p>
                </li>
                <li className='bottom-info__item'>
                    <button
                        onClick={() => {
                            setActiveDelivery(true);
                        }}
                        className='bottom-info__btn'
                    >
                        Доставка и оплата
                    </button>
                </li>
                <li className='bottom-info__item'>
                    <button
                        onClick={() => {
                            setReturnActive(true);
                        }}
                        className='bottom-info__btn'
                    >
                        Возврат
                    </button>
                </li>
            </ul>
            <ButtonMain
                height={48}
                backGround={'gray'}
                text={'Больше от ' + product.brand.name}
                onClick={() => {}}
            />
            <Modal
                minHeight={'auto'}
                maxWidth={'100%'}
                padding={'2rem'}
                visable={activeModalSize}
                setVisable={setActiveModalSize}
                borderRadius='0.4rem'
            >
                <SizesTable closeVisable={setActiveModalSize} />
            </Modal>
            <Modal
                minHeight={'auto'}
                maxWidth={'100%'}
                padding='2rem'
                setVisable={setActiveDelivery}
                visable={activeDelivery}
                borderRadius='0.4rem'
            >
                <DeliveryInfo closeModal={setActiveDelivery} />
            </Modal>
            <Modal
                minHeight={'auto'}
                maxWidth={'100%'}
                padding='2rem'
                setVisable={setReturnActive}
                visable={returnActive}
                borderRadius='0.4rem'
            >
                <ReturnInfo closeModal={setReturnActive} />
            </Modal>
        </div>
    );
};

export default ProductInfo;
