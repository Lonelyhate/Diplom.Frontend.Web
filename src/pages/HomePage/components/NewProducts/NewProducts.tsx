import React, { FC, useEffect } from "react";
import TitleMain from "../../../../UI/TitleMain/TitleMain";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./NewProducts.scss";
import ProductItem from "../../../../shared/ProductItem/ProductCard";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { fetchProductAll, fetchProductNewGet } from "../../../../store/reducers/Product/Creators/ProductCreator";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const NewProducts: FC = () => {
  const { productsNew, isLoading } = useAppSelector(
    (state) => state.productNewReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductNewGet());
  }, []);

  return (
    <section className='new-products'>
      <TitleMain text='Новые поступления' location='center' />
      <div className='new-products__slider'>
        <button className='new-products__left new-products__arrows'>
          <BsChevronLeft />
        </button>
        <button className='new-products__next new-products__arrows'>
          <BsChevronRight />
        </button>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={4}
          navigation={{
            nextEl: ".new-products__next",
            prevEl: ".new-products__left"
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {productsNew.map((item) => (
            <SwiperSlide>
              <ProductItem product={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewProducts;
