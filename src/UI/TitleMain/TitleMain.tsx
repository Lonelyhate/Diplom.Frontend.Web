import React, { FC } from 'react';
import './TitleMain.scss';
import cn from 'classnames';

interface ITitleMain {
    text: string;
    location?: 'center' | 'left';
    style?: 'middle' | 'high';
    marginTop?: number | string;
    marginBottom?: number | string;
    marginLeft?: number | string;
}

const TitleMain: FC<ITitleMain> = ({ text, location = 'left', style = 'middle', marginTop, marginBottom, marginLeft }) => {
    return (
        <h2
            style={{ textAlign: location, marginTop, marginBottom, marginLeft }}
            className={cn('TitleMain', {
                middle: style == 'middle',
                high: style == 'high'
            })}
        >
            {text}
        </h2>
    );
};

export default TitleMain;
