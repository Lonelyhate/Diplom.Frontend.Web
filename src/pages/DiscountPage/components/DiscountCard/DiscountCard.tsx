import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchDiscountGetById } from '../../../../store/reducers/User/creators/DiscountCreator';
import TitleMain from '../../../../UI/TitleMain/TitleMain';
import './DiscountCard.scss';

interface IDiscountCard {
    width?: string | number;
    isTitle?: boolean;
}

const DiscountCard: FC<IDiscountCard> = ({ isTitle = false, width = '100%' }) => {
    const { discount, error, isLoading } = useAppSelector(state => state.discountReducer);
    const [widthProcent, setWidthProcent] = useState<number>(0);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchDiscountGetById());
        let minus = 0;
        switch (discount?.sizeDscount) {
            case 5:
                minus = 50000;
                break;
            case 10:
                minus = 100000;
                break;
            case 15:
                minus = 150000;
                break;
            default:
                minus = 0;
                break;
        }
        if (discount != null) {
            if (discount.sizeDscount == 20) {
                setWidthProcent(100);
            } else {
                setWidthProcent(((discount.amountPurchases - minus) / (discount.amountBeforeDiscount - minus)) * 100);
            }
        }
    }, [discount?.amountPurchases]);

    return (
        <div className='discount-card'>
            {isTitle && <TitleMain text='Дисконтная карта' />}
            <ul className='discount-card__list'>
                <li className='discount-card__item'>
                    <div className='discount-card__name'>Скидка</div>
                    <div className='discount-card__value'>{discount?.sizeDscount}%</div>
                </li>
                <li className='discount-card__item'>
                    <div className='discount-card__name'>Номер карты</div>
                    <div className='discount-card__value'>{discount?.numberCard}</div>
                </li>
                <li className='discount-card__item'>
                    <div className='discount-card__name'>Сумма покупок</div>
                    <div className='discount-card__value'>{discount?.amountPurchases.toLocaleString()} ₽</div>
                </li>
            </ul>
            <div className='discount-card__loyalty loyalty'>
                <div style={{ width }} className='loyalty__procent'>
                    <div style={{ width: widthProcent + '%' }} className='loyalty__body'></div>
                </div>
                <div className='loyalty__numbers'>
                    <span className='loyalty__start'>{discount?.sizeDscount}%</span>
                    <span className='loyalty__end'>{discount?.sizeDscount == 20 ? '20' : discount?.sizeDscount! + 5}%</span>
                </div>
                <p className='loyalty__description'>
                    {discount?.sizeDscount == 20
                        ? 'У вас достигнута максимальная скидка в размере 20%'
                        : `До получения скидки ${discount?.sizeDscount! + 5}% на следующие покупки осталось приобрести товаров на
                    ${discount?.amountBeforeDiscount! - discount?.amountPurchases!} ₽.`}
                </p>
            </div>
            <Link to={''} className='discount-card__description'>
                Подробнее о программе лояльности
            </Link>
        </div>
    );
};

export default DiscountCard;
