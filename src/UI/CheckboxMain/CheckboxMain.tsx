import React, { FC } from 'react';
import './CheckboxMain.scss';
import { BsCheckLg } from 'react-icons/bs';
import cn from 'classnames';

interface ICheckboxMain {
    text: string;
    values: any[];
    setValues: (values: any[]) => void;
    value: string | number;
}

const CheckboxMain: FC<ICheckboxMain> = ({ text, value, values, setValues }) => {
    const onClickCheck = () => {
        if (values.some(item => item == value)) {
            setValues(values.filter(item => item != value))
        } else {
            setValues([...values, value])
        }
    };

    return (
        <div
            onClick={onClickCheck}
            className={cn('checkbox-main', {
                active: values.some(item => item == value)
            })}
        >
            <div className='checkbox-main__check'>
                <BsCheckLg
                    className={cn('checkbox-main__svg', {
                        active: values.some(item => item == value)
                    })}
                />
            </div>
            <p className='checkbox-main__text'>{text}</p>
        </div>
    );
};

export default CheckboxMain;
