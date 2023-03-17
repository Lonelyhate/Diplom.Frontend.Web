import React, { FC, useState, useEffect } from 'react';
import ButtonMain from '../../../../UI/ButtonMain/ButtonMain';
import './AddSizes.scss';
import { MdOutlineCancel } from 'react-icons/md';
import { IProductCreateRequestModel } from '../../../../models/Models/Product/ProductCreateRequestModel';

interface IAddSizes {
    category?: 'Обувь' | 'Одежда' | string | null;
    setSizes: (el: any) => void;
}

const SS = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
const CS = ['XXXS', 'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

const AddSizes: FC<IAddSizes> = ({ category, setSizes }) => {
    const [choosenSizes, setChoosenSizes] = useState<any[]>([]);
    const [shoeSizes, setShoeSizes] = useState<number[]>(SS);
    const [clothesSizes, setClothesSizes] = useState<string[]>(CS);

    const onClickBtnShoe = (e: number) => {
        setShoeSizes(shoeSizes.filter(s => s !== e));
        setChoosenSizes([...choosenSizes, shoeSizes.find(s => s == e)]);
        setSizes(choosenSizes);
    };

    const onClickClothes = (e: string) => {
        setClothesSizes(clothesSizes.filter(s => s !== e));
        setChoosenSizes([...choosenSizes, clothesSizes.find(s => e == s)]);
        setSizes(choosenSizes);
    };

    const onClickCancel = (value: string | number) => {
        setChoosenSizes(choosenSizes.filter(s => s !== value));
        setSizes(choosenSizes);
        if (Number.isInteger(value)) {
            let array: number[] = [];

            SS.forEach(n => {
                if (shoeSizes.includes(n) || value === n) {
                    array.push(n);
                }
            });
            setShoeSizes(array);
        }
        if (typeof value == 'string') {
            let array: string[] = [];
            CS.forEach(n => {
                if (clothesSizes.includes(n) || value === n) {
                    array.push(n);
                }
            });
            setClothesSizes(array);
        }
    };

    useEffect(() => {
        setChoosenSizes([]);
        setSizes(choosenSizes);
        setShoeSizes(SS);
        setClothesSizes(CS);
    }, [category]);

    return (
        <div className='add-sizes'>
            <h5 className='add-sizes__subtitle'>Выбранные размеры</h5>
            <ul className='add-sizes__choosen choosen'>
                {category == 'Обувь' || category == 'Одежда' ? (
                    choosenSizes &&
                    choosenSizes.map(item => (
                        <li key={item} className='choosen__item'>
                            <ButtonMain
                                marginRight={0}
                                backGround='gray'
                                width={45}
                                onClick={() => {
                                    onClickCancel(item);
                                }}
                                text={item}
                            />
                            <MdOutlineCancel
                                onClick={() => onClickCancel(item)}
                                size={20}
                                className='choosen__cancel'
                            />
                        </li>
                    ))
                ) : (
                    <button className='add-sizes__onesize'>ONE SIZE</button>
                )}
            </ul>
            <h5 className='add-sizes__subtitle'>Выберите размеры</h5>
            <ul className='add-sizes__variants variants'>
                {category == 'Обувь' &&
                    shoeSizes.map(item => (
                        <li key={item} className='variants__item'>
                            <ButtonMain
                                marginRight={0}
                                backGround='gray'
                                width={45}
                                onClick={() => {
                                    onClickBtnShoe(item);
                                }}
                                text={item}
                            />
                        </li>
                    ))}
            </ul>
            <ul className='add-sizes__variants variants clothes'>
                {category == 'Одежда' &&
                    clothesSizes.map(item => (
                        <li key={item} className='variants__item'>
                            <ButtonMain
                                marginRight={0}
                                backGround='gray'
                                width={54}
                                onClick={() => {
                                    onClickClothes(item);
                                }}
                                text={item}
                            />
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default AddSizes;
