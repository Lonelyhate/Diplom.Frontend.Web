import React, { FC } from 'react';
import './ProductSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import ProductItem from '../../../../shared/ProductItem/ProductCard';
import { IProduct } from '../../../../models/Models/Product/Product';

interface IProductSlider {
    items: IProduct[];
}

const ProductSlider: FC<IProductSlider> = ({ items }) => {
    return (
        <div className='products-slider'>
            <button className='products-slider__left products-slider__arrows'>
                <BsChevronLeft />
            </button>
            <button className='products-slider__next products-slider__arrows'>
                <BsChevronRight />
            </button>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={4}
                navigation={{
                    nextEl: '.products-slider__next',
                    prevEl: '.products-slider__left'
                }}
                pagination={{ clickable: true }}
            >
                {items.map(item => (
                    <SwiperSlide key={item.id + Math.random().toString()}>
                        <ProductItem product={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductSlider;
