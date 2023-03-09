import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { fetchBlogsGetAll } from "../../../../store/reducers/Blog/Creators/BlogCreator";
import TitleMain from "../../../../UI/TitleMain/TitleMain";
import BlogItem from "../BlogItem/BlogItem";
import "./BlogList.scss"

const BlogList: FC = () => {
  const dispatch = useAppDispatch();
  const { blogs } = useAppSelector((state) => state.blogReducer);

  useEffect(() => {
    dispatch(fetchBlogsGetAll())
  }, [])
  return (
    <section className='blog-list'>
      <TitleMain text='Блог' location='center' />
      <ul className='blog-list__list'>
        {blogs.map((item) => (
          <li key={item._id} className='blog-list__item'>
            <BlogItem blog={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogList;
