import React from "react";
import BlogList from "./components/BlogList/BlogList";
import HomeCategories from "./components/HomeCategories/HomeCategories";
import NewProducts from "./components/NewProducts/NewProducts";
import PopularProducts from "./components/PopularProducts/PopularProducts";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className={"home-page"}>
      <div className='home-page__container container'>
        <HomeCategories />
        <NewProducts />
        <BlogList />
        <PopularProducts/>
      </div>
    </div>
  );
};

export default HomePage;
