import React, { FC, useState, useEffect } from 'react';
import NavigationList from '../../shared/NavigationList/NavigationList';
import { dropDownItem, linkItem } from '../../models/types';
import { ACCESSORIES_PAGE_URL, HOME_URL, MAN_URL, NEWS_PAGE_URL, SEARCH_PAGE_URL, WOMAN_URL } from '../../models/urls';
import { useParams } from 'react-router-dom';
import DropDown from '../../UI/Dropdown/DropDown';
import './CatalogPage.scss';
import CatalogList from './components/CatalogList/CatalogList';
import Filter from './components/Filter/Filter';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchNewProducts, fetchProductAll } from '../../store/reducers/Product/Creators/ProductCreator';
import { IProductsFilterRequestModel } from '../../models/Models/Product/ProductsFilterRequsetModel';
import ProductApi from '../../models/API/ProductApi/ProductApi';
import InputMain from '../../UI/InputMain/InputMain';
import { AiOutlineSearch, AiFillCloseCircle } from 'react-icons/ai';

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
    const { productsNew, products } = useAppSelector(state => state.productReducer);
    const [countItems, setCountItems] = useState<dropDownItem>(dropDownCountItems[0]);
    const { brands } = useAppSelector(state => state.brandReducer);
    const [sort, setSort] = useState<dropDownItem>(dropDownSortItems[0]);
    const category = useParams<{ category: string }>().category;
    const [minMax, setMinMax] = useState<number[]>([]);
    const [gender, setGenders] = useState<number[]>([]);
    const [categoryProduct, setCategoryProduct] = useState<number[]>([]);
    const [sizes, setSizes] = useState<number[]>([]);
    const [brandsAr, setBrandsAr] = useState<number[]>([]);
    const [prices, setPrices] = useState<number[]>([]);
    const [searchStr, setSearchStr] = useState<string>('');

    const linksAr: linkItem[] = [
        {
            name: 'Главная',
            url: HOME_URL
        }
    ];
    const openPage = async () => {
        switch (category) {
            case 'news':
                linksAr.push({ name: 'Новинки', url: NEWS_PAGE_URL, current: 1 });
                break;
            case 'man':
                linksAr.push({ name: 'Мужское', url: MAN_URL, current: 1 });
                break;
            case 'woman':
                linksAr.push({ name: 'Женское', url: WOMAN_URL, current: 1 });
                break;
            case 'accessories':
                linksAr.push({ name: 'Аксессуары', url: ACCESSORIES_PAGE_URL, current: 1 });
                break;
            case 'search':
                linksAr.push({ name: 'Поиск', url: SEARCH_PAGE_URL, current: 1 });
                break;
            default:
                let brandName = brands.find(item => item.id.toString() === category!.split('-')[1])!.name;
                linksAr.push({ name: brandName, url: '', current: 1 });
                break;
        }
    };
    openPage();

    useEffect(() => {
        const requset: IProductsFilterRequestModel = {
            search: searchStr,
            sort: sort.value,
            minPrice: minMax[0],
            maxPrice: minMax[1],
            gender: gender.join(';'),
            category: categoryProduct.join(';'),
            sizes: sizes.join(';'),
            brands: brandsAr.join(';')
        };

        switch (category) {
            case 'news':
                dispatch(fetchNewProducts(requset));
                break;
            case 'man':
                requset.gender = requset.gender === '' ? '0' : '0;2';
                dispatch(fetchProductAll(requset));
                break;
            case 'woman':
                requset.gender = requset.gender === '' ? '1' : '1;2';
                dispatch(fetchProductAll(requset));
                break;
            case 'accessories':
                requset.category = '4';
                dispatch(fetchProductAll(requset));
                break;
            case 'search':
                dispatch(fetchProductAll(requset));
                break;
            default:
                requset.brands = category!.split('-')[1];
                dispatch(fetchProductAll(requset));
                break;
        }
    }, [minMax, gender, categoryProduct, sizes, brandsAr, sort, searchStr]);

    const cleanFilter = () => {
        setMinMax([]);
        setGenders([]);
        setCategoryProduct([]);
        setSizes([]);
        setBrandsAr([]);
        setSearchStr("")
    };

    useEffect(() => {
        cleanFilter();
        setSort(dropDownSortItems[0]);
    }, [category]);

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
                {category == 'search' && (
                    <div className='catalog-page__search'>
                        <div className='catalog-page__input'>
                            <AiOutlineSearch className='catalog-page__svg-search' size={22} />
                            <input type='text' placeholder='Искать' onChange={e => setSearchStr(e.target.value)} value={searchStr} />
                            {searchStr.length > 0 && <AiFillCloseCircle className='catalog-page__svg-close' size={22} />}
                        </div>
                    </div>
                )}
                <div className='catalog-page__content'>
                    <>
                        <Filter
                            setMinMax={setMinMax}
                            categoriesAr={categoryProduct}
                            setCategoriesAr={setCategoryProduct}
                            minPrice={1000}
                            maxPrice={50000}
                            genders={gender}
                            setGenders={setGenders}
                            setSizesAr={setSizes}
                            sizesAr={sizes}
                            brandsAr={brandsAr}
                            setBrandsAr={setBrandsAr}
                            category={category}
                        />
                        {productsNew?.products.length && (
                            <CatalogList products={category === 'news' ? productsNew.products : products!.products} />
                        )}
                    </>
                </div>
            </div>
        </div>
    );
};

export default CatalogPage;
