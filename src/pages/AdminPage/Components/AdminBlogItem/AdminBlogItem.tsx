import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IBlog } from '../../../../models/Models/Blog/Blog';
import DateParse from '../../../../models/Date';
import './AdminBlogItem.scss';

interface IAdminBlogItem {
    blog: IBlog;
}

const AdminBlogItem: FC<IAdminBlogItem> = ({ blog }) => {
    const date = new DateParse(blog.dateCreation!);

    return (
        <Link className='admin-blog-item' to={blog._id!}>
            <img
                src={`http://localhost:5000/${blog.content[0].image}`}
                alt=''
                className='admin-blog-item__img'
            />
            <div className='admin-blog-item__text'>
                <h3 className='admin-blog-item__title'>{blog.title}</h3>
                <div className='admin-blog-item__date'>
                    {date.GetDateWithIn()}
                </div>
            </div>
        </Link>
    );
};

export default AdminBlogItem;
