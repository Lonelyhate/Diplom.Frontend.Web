import React, {FC} from 'react';
import "./Logo.scss";
import logoUrl from "../../images/Logo.png"
import {Link} from "react-router-dom";

interface ILogo
{
    width?: number
    height?: number
    marginRight?: number
}

const Logo : FC<ILogo> = ({width=44, height= 44, marginRight}) => {
    return (
        <Link to="/" className="logo">
            <img width={width} height={height} style={{marginRight: marginRight}} src={logoUrl} alt="Logo"/>
        </Link>
    );
};

export default Logo;