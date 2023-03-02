import React, {FC} from 'react';
import "./CategoryItem.scss"
import {MAN_URL, WOMAN_URL} from "../../../../models/urls";
import manImgUrl from "../../../../images/manCategory.jpg";
import womanImgUrl from "../../../../images/womanCategory.jpg";
import {Link} from "react-router-dom";

interface ICategoryItem {
    category: "Мужское" | "Женское"
    marginRight?: string
}

const CategoryItem : FC<ICategoryItem> = ({category, marginRight}) => {
    let urlTo: string = category == "Мужское" ? MAN_URL : WOMAN_URL;
    let srcImg: string = category == "Мужское" ? manImgUrl : womanImgUrl;

    return (
        <Link to={urlTo} className={"category-item"} style={{marginRight: marginRight}} >
            <div className="category-item__img">
                <img src={srcImg} alt={category}/>
            </div>
            <h3 className="category-item__name">{category}</h3>
            <span className="category-item__watch">Смотреть</span>
        </Link>
    );
};

export default CategoryItem;