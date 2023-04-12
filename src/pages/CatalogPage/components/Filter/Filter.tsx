import React, { FC, useState } from 'react';
import './Filter.scss';
import TitleMain from '../../../../UI/TitleMain/TitleMain';
import ReactSlider from 'react-slider';
import Gender, { GenderArrayType } from '../../../../models/Models/Product/Gender';
import CheckboxMain from '../../../../UI/CheckboxMain/CheckboxMain';
import { useAppSelector } from '../../../../hooks/redux';
import { sizes, sizesClothes } from '../../../../models/Models/Product/Sizes';

const Filter: FC = () => {
    const { categories } = useAppSelector(state => state.categoryReducer);
    const { brands } = useAppSelector(state => state.brandReducer);
    const [priceStartEnd, setPriceStartEnd] = useState<number[]>([1000, 10000]);
    const [genders, setGenders] = useState<any[]>([]);
    const [categoriesAr, setCategoriesAr] = useState<any[]>([]);
    const [sizesAr, setSizesAr] = useState<any[]>([]);
    const [brandsAr, setBrandsAr] = useState<any[]>([]);

    return (
        <div className='filter'>
            <h2 className='filter__title'>Фильтр</h2>
            <h3 className='filter__subtitle'>Цена</h3>
            <div className='filter__price-startmax'>
                <div className='filter__price-column'>
                    <div className='filter__price-text'>От</div>
                    <div className='filter__price-b'>₽ {priceStartEnd[0]}</div>
                </div>
                <div className='filter__price-column'>
                    <div className='filter__price-text'>До</div>
                    <div className='filter__price-b'>₽ {priceStartEnd[1]}</div>
                </div>
            </div>
            <ReactSlider
                className='filter__slider'
                thumbClassName='filter__thumb'
                trackClassName='filter__track'
                defaultValue={[priceStartEnd[0], priceStartEnd[1]]}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                min={1000}
                max={10000}
                pearling
                minDistance={1}
                onChange={(value, index) => setPriceStartEnd(value)}
            />
            <h3 className='filter__subtitle'>Пол</h3>
            <ul className='filter__genders'>
                {Gender.Array.map(item => (
                    <li className='filter__gender'>
                        <CheckboxMain setValues={setGenders} values={genders} value={item.value} text={item.name} />
                    </li>
                ))}
            </ul>
            <h3 className='filter__subtitle'>Категория</h3>
            <ul className='filter__categories'>
                {categories.map(item => (
                    <li className='filter__category'>
                        <CheckboxMain value={item.id} setValues={setCategoriesAr} text={item.name} values={categoriesAr} />
                    </li>
                ))}
            </ul>
            <h3 className='filter__subtitle'>Размер</h3>
            <ul className='filter__sizes'>
                {sizes.map(item => (
                    <li className='filter__size'>
                        <CheckboxMain value={item.EU} setValues={setSizesAr} text={item.EU.toString()} values={sizesAr} />
                    </li>
                ))}
                {sizesClothes.map(item => (
                    <li className='filter__size'>
                        <CheckboxMain value={item} setValues={setSizesAr} text={item} values={sizesAr} />
                    </li>
                ))}
            </ul>
            <h3 className='filter__subtitle'>Бренд</h3>
            <ul className='filter__brands'>
                {brands.map(item => (
                    <li className='filter__brand'>
                        <CheckboxMain value={item.id} setValues={setBrandsAr} text={item.name} values={brandsAr} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Filter;
