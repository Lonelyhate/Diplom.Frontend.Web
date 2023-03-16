import React, { FC, useState } from 'react';
import './AddressPage.scss';
import TitleMain from '../../UI/TitleMain/TitleMain';
import AsideAccount from '../../shared/AsideAccount/AsideAccount';
import ButtonMain from '../../UI/ButtonMain/ButtonMain';
import Modal from '../../UI/Modal/Modal';
import AddressAddContent from './components/AddressAddContent/AddressAddContent';

const AddressPage: FC = () => {
    const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
    
    return (
        <div className='address-page'>
            <div className='address-page__container container'>
                <div className='address-page__content'>
                    <TitleMain text='Адреса' />
                    <ButtonMain
                        backGround='gray'
                        onClick={() => setIsActiveModal(true)}
                        text={'Добавить адрес'}
                    />
                </div>
                <AsideAccount />
            </div>
            <Modal setVisable={setIsActiveModal} visable={isActiveModal}>
                <AddressAddContent onCloseModal={setIsActiveModal} />
            </Modal>
        </div>
    );
};

export default AddressPage;
