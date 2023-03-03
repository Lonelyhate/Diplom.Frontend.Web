import React, { FC, useState, useEffect, useRef } from "react";
import "./AddProduct.scss";
import cn from "classnames";
import InputMain from "../../../../UI/InputMain/InputMain";
import TitleMain from "../../../../UI/TitleMain/TitleMain";
import { BsFillTrashFill } from "react-icons/bs";
import ButtonMain from "../../../../UI/ButtonMain/ButtonMain";
import BrandApi from "../../../../models/API/ProductApi/BrandApi";
import { fetchBrandsAll } from "../../../../store/reducers/Product/Creators/BrandCreator";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import Select from "../../../../UI/Select/Select";
import { fetchCategoriesAll } from "../../../../store/reducers/Product/Creators/CategoryCreator";
import { Category } from "../../../../models/Product/Category";
import { Brand } from "../../../../models/Product/Brand";
import AddSizes from "../AddSizies/AddSizes";
import { IProductCreateRequestModel } from "../../../../models/API/ProductApi/ProductCreateRequestModel";
import axios from "axios";
import ProductApi from "../../../../models/API/ProductApi/ProductApi";
import { fetchProductCreate } from "../../../../store/reducers/Product/Creators/ProductCreator";
import Gender, {GenderValue} from "../../../../models/Gender";

interface IAddProduct {
  visable: boolean;
  closeModal: () => void;
}

type eventClick = MouseEvent & {
  target: {
    id: string;
  };
};

const AddProduct: FC<IAddProduct> = ({ visable, closeModal }) => {
  const dispatch = useAppDispatch();
  const { brands } = useAppSelector((state) => state.brandReducer);
  const { categories } = useAppSelector((state) => state.categoryReducer);
  const [name, setName] = useState<string>("");
  const [brand, setBrand] = useState<Brand | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [price, setPrice] = useState<string>("");
  const [codeProduct, setCodProduct] = useState<string>("");
  const [descr, setDescr] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);
  const [sizes, setSizes] = useState<any>([]);
  const [gender, setGender] = useState<GenderValue | null>(null);
  const contentRef = useRef(null);

  useEffect(() => {
    dispatch(fetchBrandsAll());
    dispatch(fetchCategoriesAll());

    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as eventClick;
      if (
        contentRef.current &&
        !event.composedPath().includes(contentRef.current) &&
        !(_event.target.id == "addProduct")
      ) {
        closeModal();
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const updloadImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages([...images, e.target.files?.[0]!]);
  };

  const deletedImage = (lastModified: number, name: string) => {
    setImages([
      ...images.filter(
        (item, i) =>
          item.lastModified !== lastModified && item.name !== name && i === i
      )
    ]);
  };

  const sendRequest = async () => {
    const requestModel: IProductCreateRequestModel = {
      name: name,
      brandId: brand!.id,
      categoryId: category!.id,
      sizes: (sizes as []).join(";"),
      codeProduct: codeProduct,
      description: descr,
      price: price,
      images: images
    };
    dispatch(fetchProductCreate(requestModel));
  };

  return (
    <div
      className={cn("add-product", {
        active: visable
      })}
    >
      <div
        ref={contentRef}
        className={cn("add-product__content", {
          active: visable
        })}
      >
        <TitleMain text='Добавить товар' />
        <InputMain
          labelText='Название'
          placeholder='Введите название'
          value={name}
          setValue={setName}
        />
        <h4 className='add-product__subtitle'>Бренд</h4>
        <div className='add-product__select'>
          <Select
            placeholder='Выберите бренд'
            items={brands}
            currentElement={brand}
            setCurrentElement={setBrand}
          />
        </div>
        <h4 className='add-product__subtitle'>Пол</h4>
        <div className='add-product__select'>
          <Select
              placeholder='Выберите пол'
              items={Gender.Array}
              currentElement={gender}
              setCurrentElement={setGender}
          />
        </div>
        <h4 className='add-product__subtitle'>Категория</h4>
        <div className='add-product__select'>
          <Select
            placeholder='Выберите категорию'
            items={categories}
            setCurrentElement={setCategory}
            currentElement={category}
          />
        </div>
        {category && (
          <>
            <h4 className='add-product__subtitle'>Размеры</h4>
            <AddSizes setSizes={setSizes} category={category?.name} />
          </>
        )}
        <InputMain
          marginTop={15}
          labelText='Цена'
          placeholder='Введите цену'
          setValue={setPrice}
          value={price}
        />
        <InputMain
          marginTop={15}
          labelText='Код товара'
          placeholder='Введите код'
          setValue={setCodProduct}
          value={codeProduct}
        />
        <InputMain
          marginTop={15}
          labelText='Описание'
          placeholder='Введите описание'
          setValue={setDescr}
          value={descr}
        />
        <label className='add-product__label-img label-img' htmlFor='images'>
          <span className='label-img__text'>+ Загрузить изображение</span>
          <input
            className='label-img__input'
            id='images'
            type='file'
            accept='image/*'
            onChange={updloadImages}
          />
        </label>
        <ul className='add-product__images images'>
          {images.map((item, i) => (
            <li key={i} className='images__item'>
              <span className='images__name'>
                {item.name.length < 30
                  ? item.name
                  : item.name.substring(0, 30) + "..."}
              </span>
              <button
                onClick={() => {
                  deletedImage(item.lastModified, item.name);
                }}
                className='images__delete'
              >
                <BsFillTrashFill color='rgb(181, 0, 0)' />
              </button>
            </li>
          ))}
        </ul>
        <div className='add-product__bottom'>
          <ButtonMain
            marginRight={20}
            text={"Добавить"}
            onClick={() => {
              sendRequest();
            }}
          />
          <ButtonMain backGround='gray' text={"Отмена"} onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
