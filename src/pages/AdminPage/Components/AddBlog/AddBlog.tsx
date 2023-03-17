import React, { FC, useState } from 'react';
import './AddBlog.scss';
import cn from 'classnames';
import TitleMain from '../../../../UI/TitleMain/TitleMain';
import Select from '../../../../UI/Select/Select';
import InputMain from '../../../../UI/InputMain/InputMain';
import ButtonMain from '../../../../UI/ButtonMain/ButtonMain';
import { GiCancel } from 'react-icons/gi';
import { BlogContentType, IBlog } from '../../../../models/Models/Blog/Blog';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchBlogCreate } from '../../../../store/reducers/Blog/Creators/BlogCreator';

interface IAddBlog {
    active: boolean;
    setActive: (state: boolean) => void;
}

const AddBlog: FC<IAddBlog> = ({ active, setActive }) => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState<string>('');
    const [parag, setParag] = useState<string>('');
    const [img, setImg] = useState<File | null>(null);
    const [paragraphs, setParagraphs] = useState<BlogContentType[]>([]);

    const updloadImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImg(e.target.files?.[0]!);
    };

    const addParagraphs = () => {
        setParag('');
        setImg(null);
        setParagraphs([...paragraphs, { text: parag, image: img! }]);
    };

    const sendBlogForCreate = () => {
        const blog: IBlog = {
            title: name,
            content: paragraphs
        };
        dispatch(fetchBlogCreate(blog));
    };

    return (
        <div
            onClick={() => setActive(false)}
            className={cn('add-blog', {
                active: active
            })}
        >
            <div
                onClick={e => e.stopPropagation()}
                className={cn('add-blog__content', {
                    active: active
                })}
            >
                <TitleMain text={'Добавить статью'} />
                <InputMain
                    labelText={'Название'}
                    placeholder={'Введите название'}
                    setValue={setName}
                    value={name}
                />
                <div className='add-blog__subtitle'>Абзацы</div>
                <ul className='add-blog__list'>
                    {paragraphs.length > 0 ? (
                        paragraphs.map((item, i) => (
                            <li key={i} className='add-blog__paragraph'>
                                <div className='add-blog__item'>
                                    <p className='add-blog__text'>
                                        {item.text}
                                    </p>
                                    {item.image && (
                                        <span className='add-blog__img-name'>
                                            {item.image.name.length < 30
                                                ? 'Изображение - ' +
                                                  item.image?.name
                                                : 'Изображение - ' +
                                                  item.image?.name.substring(
                                                      0,
                                                      30
                                                  )}
                                        </span>
                                    )}
                                </div>
                                <button
                                    onClick={() => {}}
                                    className='add-blog__cancel'
                                >
                                    <GiCancel size={20} />
                                </button>
                            </li>
                        ))
                    ) : (
                        <div className='add-blog__empty'>
                            Не добавлены абзацы
                        </div>
                    )}
                </ul>
                <InputMain
                    placeholder={'Напищите абзац'}
                    setValue={setParag}
                    value={parag}
                />
                {img ? (
                    <div className='add-blog__img'>
                        <span className='add-blog__img-name'>
                            {img.name.length < 30
                                ? img.name
                                : img.name.substring(0, 30)}
                        </span>
                        <button
                            onClick={() => setImg(null)}
                            className='add-blog__cancel'
                        >
                            <GiCancel size={20} />
                        </button>
                    </div>
                ) : (
                    <label
                        className='add-product__label-img label-img'
                        htmlFor='images'
                    >
                        <span className='label-img__text'>
                            + Загрузить изображение к абзацу
                        </span>
                        <input
                            className='label-img__input'
                            id='images'
                            type='file'
                            accept='image/*'
                            onChange={updloadImages}
                        />
                    </label>
                )}
                <ButtonMain
                    marginTop={'10px'}
                    text={'Добавить абзац'}
                    onClick={addParagraphs}
                />
                <div className='add-blog__bottom'>
                    <ButtonMain
                        onClick={sendBlogForCreate}
                        text='Добавить блог'
                        marginRight={20}
                    />
                    <ButtonMain
                        onClick={() => setActive(false)}
                        text='Отмена'
                        backGround='gray'
                    />
                </div>
            </div>
        </div>
    );
};

export default AddBlog;
