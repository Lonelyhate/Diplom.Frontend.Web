import React, {FC, useState} from 'react';
import "./AddBlog.scss"
import cn from "classnames"
import TitleMain from "../../../../UI/TitleMain/TitleMain";
import Select from "../../../../UI/Select/Select";
import InputMain from "../../../../UI/InputMain/InputMain";
import ButtonMain from "../../../../UI/ButtonMain/ButtonMain";

interface IAddBlog {
    active: boolean,
    setActive: (state: boolean) => void
}

type Paragraphs = {
    text: string;
    image: File
}

const AddBlog: FC<IAddBlog> = ({active, setActive}) => {
    const [name, setName] = useState<string>("");
    const [parag, setParag] = useState<string>("");
    const [img, setImg] = useState<File | null>(null);
    const [paragraphs, setParagraphs] = useState<Paragraphs[]>([]);

    const updloadImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImg(e.target.files?.[0]!);
    };

    return (
        <div onClick={() => setActive(false)} className={cn("add-blog", {
            active: active
    })} >
            <div onClick={(e) => e.stopPropagation()} className={cn("add-blog__content", {
                active: active
            })}>
                <TitleMain text={"Добавить статью"} />
                <InputMain labelText={"Название"} placeholder={"Введите название"} setValue={setName} value={name} />
                <div className="add-blog__subtitle">Абзацы</div>
                <ul className="add-blog__list">
                    {paragraphs.length > 0 ?
                        <li className="add-blog__paragraph"></li>
                        :
                        <div className="add-blog__empty">Не добавлены абзацы</div>
                    }
                <InputMain placeholder={"Напищите абзац"} setValue={setParag} value={parag} />
                    {img ?
                        <div className="add-blog__img" ><div/>
                            :
                            <label className='add-product__label-img label-img' htmlFor='images'>
                                <span className='label-img__text'>+ Загрузить изображение к абзацу</span>
                                <input
                                    className='label-img__input'
                                    id='images'
                                    type='file'
                                    accept='image/*'
                                    onChange={updloadImages}
                                />
                            </label>}
                </ul>
                <ButtonMain marginTop={"10px"} text={"Добавить абзац"} onClick={() => {}}/>
            </div>
        </div>
    );
};

export default AddBlog;