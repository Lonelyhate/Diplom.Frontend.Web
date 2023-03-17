import React, { FC, useEffect, useState } from 'react';
import './ProductImages.scss';
import { IProduct } from '../../../../models/Models/Product/Product';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';

interface IProductImages {
    product: IProduct;
}

const ProductImages: FC<IProductImages> = ({ product }) => {
    const [imgs, setImgs] = useState<string[]>([]);

    useEffect(() => {
        if (product) {
            setImgs(product.images.split(';'));
        }
    }, [product.images]);

    return (
        <div className='product-images__slider'>
            <div className='product-images__pagination'></div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                pagination={{
                    clickable: true,
                    el: '.product-images__pagination',
                    renderBullet: function (index, className) {
                        const img = 'https://localhost:7081/' + imgs[index];
                        return (
                            '<span style="background-image: url(' +
                            img +
                            ');"  class="' +
                            className +
                            '">' +
                            '</span>'
                        );
                    }
                }}
                modules={[Pagination, EffectCoverflow]}
                className='mySwiper'
            >
                {imgs &&
                    imgs.map(item => (
                        <SwiperSlide key={item}>
                            <img
                                className={'product-images__img'}
                                src={`https://localhost:7081/${item}`}
                                alt=''
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default ProductImages;
