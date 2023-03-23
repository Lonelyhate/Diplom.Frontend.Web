import React, { FC, useEffect, useState } from 'react';
import './AddressPage.scss';
import TitleMain from '../../UI/TitleMain/TitleMain';
import AsideAccount from '../../shared/AsideAccount/AsideAccount';
import ButtonMain from '../../UI/ButtonMain/ButtonMain';
import Modal from '../../UI/Modal/Modal';
import AddressAddContent from './components/AddressAddContent/AddressAddContent';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchAddressRemove, fetchAddressSetActive, fetchAddresses } from '../../store/reducers/User/creators/AddressCreator';
import cn from 'classnames';
import { IAddress } from '../../models/Models/User/Address';
import AddressItem from '../../shared/AddressItem/AddressItem';

const AddressPage: FC = () => {
    const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
    const [updateModal, setUpdateModal] = useState<boolean>(false);
    const [addressForUpdate, setAddressForUpdate] = useState<IAddress | null>(null);
    const dispatch = useAppDispatch();
    const { addresses, error, isLoading } = useAppSelector(state => state.addressReducer);
    const [activeAddress, setActiveAddress] = useState<string>('');

    const onDeleteAddress = (id: number) => {
        dispatch(fetchAddressRemove(id));
    };

    useEffect(() => {
        dispatch(fetchAddresses());
    }, []);

    const onAddedAddress = () => {
        setUpdateModal(false);
        setIsActiveModal(true);
    };

    const onUpdateAddress = (address: IAddress) => {
        setUpdateModal(true);
        setIsActiveModal(true);
        setAddressForUpdate(address);
    };

    return (
        <div className='address-page'>
            <div className='address-page__container container'>
                <div className='address-page__content'>
                    <TitleMain text='Адреса' />
                    <ul className='address-page__list'>
                        {addresses &&
                            addresses.length > 0 &&
                            addresses.map(item => (
                                <li key={item.id} className='address-page__item'>
                                    <AddressItem item={item} onDeleteAddress={onDeleteAddress} onUpdateAddress={onUpdateAddress} />
                                </li>
                            ))}
                    </ul>
                    <ButtonMain backGround='gray' onClick={onAddedAddress} text={'Добавить адрес'} />
                </div>
                <AsideAccount />
            </div>
            <Modal setVisable={setIsActiveModal} visable={isActiveModal}>
                <AddressAddContent
                    setAddress={setAddressForUpdate}
                    address={addressForUpdate}
                    update={updateModal}
                    onCloseModal={setIsActiveModal}
                />
            </Modal>
        </div>
    );
};

export default AddressPage;
