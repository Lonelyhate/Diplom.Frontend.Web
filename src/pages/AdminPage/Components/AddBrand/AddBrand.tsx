import React, { FC, useState } from 'react';
import './AddBrand.scss';
import TitleMain from '../../../../UI/TitleMain/TitleMain';
import { GrClose } from 'react-icons/gr';
import InputMain from '../../../../UI/InputMain/InputMain';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchBrandCreate } from '../../../../store/reducers/Product/Creators/BrandCreator';
import ButtonMain from '../../../../UI/ButtonMain/ButtonMain';

interface IAddBrand {
    setClose: (value: boolean) => void;
}

const AddBrand: FC<IAddBrand> = ({setClose}) => {
    const [name, setName] = useState<string>('');
    const dispatch = useAppDispatch();

    const onClickAddBrand = () => {
        dispatch(fetchBrandCreate(name))
        setName("")
        setClose(false);
    }
    return (
        <div className='add-brand'>
            <div className='add-brand__header'>
                <TitleMain text='Добавить бренд' />
                <GrClose onClick={() => setClose(false)} className='add-brand__close' size={18} />
            </div>
            <InputMain placeholder='Введите название бренда' setValue={setName} value={name} />
            <ButtonMain marginTop='20px' location='right' onClick={onClickAddBrand} text={"Добавить"} width={200} />
        </div>
    );
};

export default AddBrand;
