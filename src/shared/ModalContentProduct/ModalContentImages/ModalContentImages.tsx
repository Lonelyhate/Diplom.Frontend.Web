import React, { FC } from 'react';
import './ModalContentImages.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

interface IModalContentImages {
    images: string;
}

const ModalContentImages: FC<IModalContentImages> = ({ images }) => {
    const imgs = images.split(';');
    return (
        <div className='content-images'>
            <Swiper
                pagination={{
                    clickable: true,
                    el: '.content-images__pagination',
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
                modules={[Pagination]}
            >
                {imgs &&
                    imgs.map(item => (
                        <SwiperSlide key={item}>
                            <img
                                src={`https://localhost:7081/${item}`}
                                alt=''
                                className='content-images__img'
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
            <div className='content-images__bottom'>
                <div className='content-images__pagination'></div>
            </div>
        </div>
    );
};

export default ModalContentImages;
