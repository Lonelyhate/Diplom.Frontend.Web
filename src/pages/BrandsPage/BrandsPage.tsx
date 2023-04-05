import React, { FC, useEffect, useState } from 'react';
import './BrandsPage.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import cn from 'classnames';
import { Brand } from '../../models/Models/Product/Brand';
import { fetchBrandsAll } from '../../store/reducers/Product/Creators/BrandCreator';

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

const BrandsPage: FC = () => {
    const { brands, error, isLoading } = useAppSelector(state => state.brandReducer);
    const dispatch = useAppDispatch();
    const [brandsMap, setBrandsMap] = useState<Map<string, Brand[]>>();
    const [letterActive, setLetterActive] = useState<string>('');

    useEffect(() => {
        setMapFullBrands();
    }, [brands]);

    useEffect(() => {
        dispatch(fetchBrandsAll());
    }, []);

    const onClickSetSort = (value: string) => {
        if (value == letterActive) {
            setMapFullBrands();
            setLetterActive("")
            return;
        }
        const brds: Brand[] = brands.filter(item => item.name[0].toUpperCase() == value);
        const tempBrandsMap = new Map<string, Brand[]>().set(value, brds);
        setBrandsMap(tempBrandsMap);
        setLetterActive(value)
    };

    const setMapFullBrands = () => {
        if (brands.length > 0) {
            const tempBrandsMap = new Map<string, Brand[]>();
            for (let i = 0; i < alphabet.length; i++) {
                const brds: Brand[] = brands.filter(item => item.name[0].toUpperCase() == alphabet[i]);
                tempBrandsMap.set(alphabet[i], brds);
            }
            setBrandsMap(tempBrandsMap);
        }
    };

    return (
        <div className='brand-page'>
            <div className='brand-page__container container'>
                <div className='brand-page__header'>
                    <ul className='brand-page__alphabet'>
                        {alphabet.map(item => (
                            <li key={item}>
                                {brandsMap && (
                                    <button
                                        onClick={() => {
                                            onClickSetSort(item);
                                        }}
                                        disabled={brands.filter(el => el.name[0].toUpperCase() == item).length == 0}
                                        className={cn('brand-page__alph', {
                                            empty: brands.filter(el => el.name[0].toUpperCase() == item).length == 0,
                                            active: letterActive == item
                                        })}
                                    >
                                        {item}
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='brand-page__content'>
                    {alphabet.map(
                        item =>
                            brandsMap &&
                            brandsMap.get(item) &&
                            brandsMap.get(item)!.length > 0 && (
                                <div key={item} className='brand-page__column'>
                                    <h3 className='brand-page__title'>{item}</h3>
                                    <ul className='brand-page__list'>
                                        {brandsMap!.get(item)!.map(el => (
                                            <li key={el.id} className='brand-page__brand-item'>
                                                {el.name}
                                            </li>
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
