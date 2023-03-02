import React, {FC} from 'react';
import "./HomeCategories.scss";
import CategoryItem from "../CategoryItem/CategoryItem";

const HomeCategories : FC = () => {
    return (
        <div className={"home-categories"}>
            <CategoryItem category={"Мужское"} marginRight="2.4rem" />
            <CategoryItem category={"Женское"} />
        </div>
    );
};

export default HomeCategories;