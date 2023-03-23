import React, { FC } from 'react';
import { IAddress } from '../../models/Models/User/Address';
import './AddressItem.scss';
import cn from 'classnames';
import ButtonMain from '../../UI/ButtonMain/ButtonMain';
import { useAppDispatch } from '../../hooks/redux';
import { fetchAddressSetActive } from '../../store/reducers/User/creators/AddressCreator';

interface IAddressItem {
    item: IAddress;
    onDeleteAddress?: (id: number) => void;
    onUpdateAddress?: (item: IAddress) => void;
    isBtns?: boolean;
}

const AddressItem: FC<IAddressItem> = ({ item, onDeleteAddress, onUpdateAddress, isBtns = true }) => {
    const dispatch = useAppDispatch();

    const onSetActiveAddress = (id: number) => {
        dispatch(fetchAddressSetActive(id));
    };
    return (
        <div key={item.id} className='address-item'>
            <div className='address-item__content-address'>
                <span
                    onClick={() => {
                        onSetActiveAddress(item.id);
                    }}
                    className={cn('address-item__radio', {
                        active: item.isActiveAddress == 1
                    })}
                ></span>
                <p className='address-item__text'>{item.address}</p>
            </div>
            {isBtns && (
                <div className='address-item__btns'>
                    {!(item.isActiveAddress == 1) && (
                        <ButtonMain
                            width={77}
                            height={32}
                            backGround='gray'
                            onClick={() => onDeleteAddress && onDeleteAddress(item.id)}
                            text={'Удалить'}
                        />
                    )}
                    <ButtonMain
                        width={124}
                        height={32}
                        backGround='gray'
                        onClick={() => {
                            onUpdateAddress && onUpdateAddress(item);
                        }}
                        text={'Редактировать'}
                    />
                </div>
            )}
        </div>
    );
};

export default AddressItem;
