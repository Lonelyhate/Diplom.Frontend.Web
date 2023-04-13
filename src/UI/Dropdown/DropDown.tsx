import React, { FC, useState, useEffect, useRef } from 'react';
import './Dropdown.scss';
import { dropDownItem } from '../../models/types';
import { BsChevronDown } from 'react-icons/bs';
import cn from 'classnames';
import { StringLiteral } from 'typescript';

interface IDropDown {
    items: dropDownItem[];
    currentValue: dropDownItem;
    setCurrentValue: (value: dropDownItem) => void;
    width?: string | number;
    height?: number;
    marginRight?: number | string;
    stringLength?: number;
    onClickFunc?: () => void;
}

const DropDown: FC<IDropDown> = ({
    items,
    currentValue,
    setCurrentValue,
    width = 168,
    height = 32,
    marginRight,
    stringLength = 30,
    onClickFunc
}) => {
    const [listActive, setListActive] = useState<boolean>(false);
    const heightList = (height + 2) * items.length;
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !event.composedPath().includes(ref.current)) {
                setListActive(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return document.removeEventListener('click', handleClickOutside);
    }, []);

    const onClickItem = (item: dropDownItem) => {
        setCurrentValue(item);
        setListActive(false);
        onClickFunc && onClickFunc();
    };

    return (
        <div
            ref={ref}
            style={{ width, marginRight, maxHeight: listActive ? heightList + height : height }}
            className={cn('dropdown', {
                active: listActive
            })}
        >
            <div onClick={() => setListActive(!listActive)} style={{ height }} className='dropdown__current-value'>
                <span>
                    {currentValue.name.length > stringLength ? currentValue.name.substring(0, stringLength) + '...' : currentValue.name}
                </span>
                <BsChevronDown className='dropdown__svg' size={12} />
            </div>
            <ul style={{ maxHeight: listActive ? heightList : 0 }} className='dropdown__list'>
                {items.map(item => (
                    <li
                        style={{ height: height + 2 }}
                        onClick={() => onClickItem(item)}
                        key={item.value}
                        className={cn('dropdown__item', {
                            active: currentValue.value == item.value
                        })}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropDown;
