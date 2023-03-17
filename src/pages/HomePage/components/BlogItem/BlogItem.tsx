import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IBlog } from '../../../../models/Models/Blog/Blog';
import DateParse from '../../../../models/Date';
import './BlogItem.scss';

interface IBlogItem {
    blog: IBlog;
}

const BlogItem: FC<IBlogItem> = ({ blog }) => {
    return (
        <Link className='blog-item' to={blog._id!}>
            <img
                src={`http://localhost:5000/${blog.content[0].image}`}
                alt=''
                className='blog-item__img'
            />
            <div className='blog-item__text'>
                <div className='blog-item__blog'>БЛОГ</div>
                <h3 className='blog-item__title'>{blog.title}</h3>
                <div className='blog-item__more'>ПОДРОБНЕЕ</div>
            </div>
        </Link>
    );
};

export default BlogItem;
