import React, { FC } from 'react';
import './ButtonMain.scss';
import cn from 'classnames';
import Spinner from '../Spinner/Spinner';
import { IconType } from 'react-icons';

interface IButtonMain {
    text: string | JSX.Element | number | string[] | Function;
    backGround?: 'primary' | 'gray';
    width?: string | number;
    height?: string | number;
    maringBottom?: string;
    onClick: () => void;
    isLoading?: boolean;
    sizeSpinner?: number;
    widthBorder?: number;
    marginTop?: string;
    disabled?: boolean;
    location?: 'center';
    marginRight?: number | string;
    ref?: any;
    id?: string;
    fontSize?: number | string;
    borderRadius?: number | string;
}

const ButtonMain: FC<IButtonMain> = ({
    text,
    backGround = 'primary',
    width = '100%',
    height = '4rem',
    maringBottom,
    onClick,
    isLoading = false,
    sizeSpinner = 40,
    widthBorder = 4,
    marginTop,
    disabled,
    location,
    marginRight,
    ref,
    id,
    fontSize,
    borderRadius = '0.4rem'
}) => {
    const isDisabled = (): boolean => {
        if (isLoading || disabled) {
            return true;
        }
        return false;
    };
    let Text;
    if (typeof text == 'function') {
        Text = (text as IconType)!;
    }

    return (
        <button
            id={id}
            ref={ref && ref}
            disabled={isDisabled()}
            onClick={onClick}
            style={{
                width: width,
                height: height,
                marginBottom: maringBottom,
                marginTop: marginTop,
                marginRight,
                fontSize,
                borderRadius
            }}
            className={cn('button-main', {
                primary: backGround == 'primary',
                gray: backGround == 'gray',
                loading: isLoading == true,
                center: location == 'center'
            })}
        >
            {isLoading ? (
                <Spinner
                    color={'#000'}
                    size={sizeSpinner}
                    widthBorder={widthBorder}
                />
            ) : Array.isArray(text) ? (
                text.map(item => <span key={item}>{item}</span>)
            ) : typeof text == 'function' ? (
                Text && <Text />
            ) : (
                <span>{text}</span>
            )}
        </button>
    );
};

export default ButtonMain;
