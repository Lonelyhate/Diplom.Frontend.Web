import React from 'react';
import HomeCategories from "./components/HomeCategories/HomeCategories";
import NewProducts from './components/NewProducts/NewProducts';
import "./HomePage.scss"

const HomePage = () => {
    return (
        <div className={"home-page"}>
            <div className="home-page__container container">
                <HomeCategories/>
                <NewProducts/>
            </div>
        </div>
    );
};

export default HomePage;