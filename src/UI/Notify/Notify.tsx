import './Notify.scss';
import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';

interface INotify {
    text: string;
    visable: boolean;
    setVisable: (value: boolean) => void;
}

const Notify: FC<INotify> = ({ text, visable, setVisable }) => {
    useEffect(() => {
        if (visable === true) {
            setVisable(true);
            setTimeout(() => {
                setVisable(false);
            }, 2000);
        }
    }, [visable]);

    return (
        <div
            className={cn('notify', {
                visable: visable
            })}
        >
            <p className='notify__text'>{text}</p>
        </div>
    );
};

export default Notify;
