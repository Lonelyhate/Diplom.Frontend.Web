import React, { FC, useEffect } from 'react';
import './BrandsPage.scss';
import { useAppSelector } from '../../hooks/redux';
import cn from 'classnames';
import { Brand } from '../../models/Models/Product/Brand';

const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];
const brandsMap = new Map<string, Brand[]>();

const BrandsPage: FC = () => {
    const { brands, error, isLoading } = useAppSelector(state => state.brandReducer);

    useEffect(() => {
        if (brands.length > 0) {
            for (let i = 0; i < alphabet.length; i++) {
                const brds: Brand[] = brands.filter(item => item.name[0].toUpperCase() == alphabet[i]);
                brandsMap.set(alphabet[i], brds);
            }
        }
    }, [brands]);

    return (
        <div className='brand-page'>
            <div className='brand-page__container container'>
                <div className='brand-page__header'>
                    <ul className='brand-page__alphabet'>
                        {alphabet.map(item => (
                            <li onClick={() => console.log(3)}>
                                <button
                                    disabled={brandsMap.get(item)?.length == 0}
                                    className={cn('brand-page__alph', {
                                        empty: brandsMap.get(item)?.length == 0
                                    })}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='brand-page__content'>
                    {alphabet.map(
                        item =>
                            brandsMap.get(item) &&
                            brandsMap.get(item)!.length > 0 && (
                                <div className='brand-page__column'>
                                    <h3 className='brand-page__title'>{item}</h3>
                                    <ul className='brand-page__list'>
                                        {brandsMap.get(item)!.map(el => (
                                            <li className='brand-page__brand-item'>{el.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )
                    )}
                </div>
            </div>
        </div>
    );
};

export default BrandsPage;
