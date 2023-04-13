import React, { FC, useState, useEffect } from 'react';
import NavigationList from '../../shared/NavigationList/NavigationList';
import { dropDownItem, linkItem } from '../../models/types';
import { ACCESSORIES_PAGE_URL, HOME_URL } from '../../models/urls';
import { useParams } from 'react-router-dom';
import DropDown from '../../UI/Dropdown/DropDown';
import './CatalogPage.scss';
import CatalogList from './components/CatalogList/CatalogList';
import Filter from './components/Filter/Filter';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchNewProducts } from '../../store/reducers/Product/Creators/ProductCreator';
import { IProductsFilterRequestModel } from '../../models/Models/Product/ProductsFilterRequsetModel';

const CatalogPage: FC = () => {
    const dropDownCountItems: dropDownItem[] = [
        { name: 'Показывать: 60', value: '0' },
        { name: 'Показывать: 120', value: '1' },
        { name: 'Показывать: 240', value: '2' }
    ];
    const dropDownSortItems: dropDownItem[] = [
        { name: 'По умолчанию', value: '0' },
        { name: 'По возрастанию цены', value: '1' },
        { name: 'По убыванию цены', value: '2' },
        { name: 'Сначала старые товары', value: '3' },
        { name: 'Сначала новые товары', value: '4' }
    ];
    const dispatch = useAppDispatch();
    const { productsNew } = useAppSelector(state => state.productReducer);
    const [countItems, setCountItems] = useState<dropDownItem>(dropDownCountItems[0]);
    const [sort, setSort] = useState<dropDownItem>(dropDownSortItems[0]);
    const category = useParams<{ category: string }>().category;
    const linksAr: linkItem[] = [
        {
            name: 'Главная',
            url: HOME_URL
        }
    ];

    switch (category) {
        case 'news':
            linksAr.push({ name: 'Новинки', url: ACCESSORIES_PAGE_URL, current: 1 });
            break;
        default:
            break;
    }

    useEffect(() => {
        const requset: IProductsFilterRequestModel = {};
        dispatch(fetchNewProducts(requset));
    }, []);

    const onClickSortSet = () => {
        const request: IProductsFilterRequestModel = {
            sort: sort.value
        };
        dispatch(fetchNewProducts(request));
    };

    return (
        <div className='catalog-page'>
            <div className='catalog-page__container container'>
                <div className='catalog-page__header'>
                    <NavigationList items={linksAr} />
                    <div className='catalog-page__params'>
                        <DropDown
                            marginRight={'1.2rem'}
                            width={168}
                            currentValue={countItems}
                            items={dropDownCountItems}
                            setCurrentValue={setCountItems}
                        />
                        <DropDown
                            stringLength={19}
                            items={dropDownSortItems}
                            currentValue={sort}
                            setCurrentValue={setSort}
                            onClickFunc={onClickSortSet}
                        />
                    </div>
                </div>
                <div className='catalog-page__content'>
                    <Filter />
                    {productsNew?.products && <CatalogList products={productsNew?.products} />}
                </div>
            </div>
        </div>
    );
};

export default CatalogPage;
