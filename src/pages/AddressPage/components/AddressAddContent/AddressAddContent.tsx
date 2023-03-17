import React, { FC, useEffect, useState } from 'react';
import TitleMain from '../../../../UI/TitleMain/TitleMain';
import { RxCross1 } from 'react-icons/rx';
import {
    AddressSuggestions,
    DaDataAddress,
    DaDataSuggestion
} from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import ButtonMain from '../../../../UI/ButtonMain/ButtonMain';
import './AddressAddContent.scss';
import { MdClear } from 'react-icons/md';
import { useAppDispatch } from '../../../../hooks/redux';
import {
    fetchAddressAdd,
    fetchAddressUpdate
} from '../../../../store/reducers/User/creators/AddressCreator';
import { IAddress } from '../../../../models/Models/User/Address';

interface IAddressAddContent {
    onCloseModal: (value: boolean) => void;
    update: boolean;
    address?: IAddress | null;
    setAddress: (value: IAddress) => void
}

const AddressAddContent: FC<IAddressAddContent> = ({
    onCloseModal,
    update,
    address,
    setAddress
}) => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<
        DaDataSuggestion<DaDataAddress> | undefined
    >();
    const [errorMessage, setErrorMessage] = useState<string>('');
    const closeModal = () => {
        onCloseModal(false);
        setValue(undefined);
    };

    const onSaveAddress = () => {
        if (!value) {
            setErrorMessage('Выберите адрес из списка');
            return;
        }
        if (!value.data.city) {
            setErrorMessage('Введите город');
            return;
        }
        if (!value.data.street) {
            setErrorMessage('Введите улицу');
            return;
        }
        if (!value.data.house) {
            setErrorMessage('Введите дом');
            return;
        }
        if (!value.data.flat) {
            setErrorMessage('Введите кваритру');
            return;
        }

        setErrorMessage('');
        if (update && address) {
            dispatch(fetchAddressUpdate(address.id, value.value));
        } else {
            dispatch(fetchAddressAdd(value.value));
        }
        closeModal();
    };

    return (
        <div className='add-address'>
            <div className='add-address__header'>
                <h3 className='add-address__title'>
                    {!update ? 'Новый адрес' : 'Редактировать'}
                </h3>
                <button onClick={closeModal} className='add-address__close'>
                    <RxCross1 size={20} />
                </button>
            </div>
            <div className='add-address__content'>
                <p className='add-address__info'>
                    Город, улица, дом, корпус, строение, квартира
                </p>
                <div className='add-address__input'>
                    <AddressSuggestions
                        token='0affe47048caf6e60ba5fbcc6ef3af8b2f053cf8'
                        value={value}
                        onChange={setValue as any}
                        selectOnBlur={true}
                    />
                    <button
                        onClick={() => {
                            setValue(undefined);
                        }}
                        className='add-address__clear'
                    >
                        <MdClear size={12} />
                    </button>
                </div>
                {errorMessage == '' ? (
                    <div className='add-address__help'>
                        Выберите из выпадающего списка
                    </div>
                ) : (
                    <div className='add-address__error'>{errorMessage}</div>
                )}
            </div>

            <ButtonMain
                marginTop='auto'
                location='center'
                onClick={onSaveAddress}
                text={'Сохранить'}
                width={327}
                height={48}
            />
        </div>
    );
};

export default AddressAddContent;
