import React, { FC } from 'react';
import './Filter.scss';
import TitleMain from '../../../../UI/TitleMain/TitleMain';
import ReactSlider from 'react-slider';

const Filter: FC = () => {
    return (
        <div className='filter'>
            <TitleMain text='Фильтр' />
            <h3 className='filter__subtitle'>Цена</h3>
            <ReactSlider
                className='horizontal-slider'
                thumbClassName='example-thumb'
                trackClassName='example-track'
                defaultValue={[0, 100]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                pearling
                minDistance={10}
            />
        </div>
    );
};

export default Filter;
