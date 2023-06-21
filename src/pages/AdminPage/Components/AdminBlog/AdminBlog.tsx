import React, { FC, useState, useEffect } from 'react';
import './AdminBlog.scss';
import AsideAdmin from '../AsideAdmin/AsideAdmin';
import TitleMain from '../../../../UI/TitleMain/TitleMain';
import ButtonMain from '../../../../UI/ButtonMain/ButtonMain';
import AddBlog from '../AddBlog/AddBlog';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchBlogsGetAll } from '../../../../store/reducers/Blog/Creators/BlogCreator';
import AdminBlogItem from '../AdminBlogItem/AdminBlogItem';

const AdminBlog: FC = () => {
    const [activeAddBlog, setActiveBlog] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const { blogs } = useAppSelector(state => state.blogReducer);

    useEffect(() => {
        dispatch(fetchBlogsGetAll());
    }, []);

    return (
        <div className='admin-blog'>
            <div className='admin-blog__container container'>
                <AsideAdmin />
                <div className='admin-blog__content'>
                    <div className='admin-blog__header'>
                        <TitleMain text='Блог' location='left' />
                        <ButtonMain
                            width={120}
                            text={'Добавить'}
                            onClick={() => {
                                setActiveBlog(true);
                            }}
                        />
                    </div>
                    <ul className='admin-blog__list'>
                        {blogs.map(item => (
                            <li key={item._id} className='admin-blog__item'>
                                <AdminBlogItem blog={item} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <AddBlog active={activeAddBlog} setActive={setActiveBlog} />
        </div>
    );
};

export default AdminBlog;
