import React from 'react';
import "./Header.scss";
import Logo from "../Logo/Logo";
import Nav from "./Nav/Nav";
import ProfileLinks from "./ProfileLinks/ProfileLinks";

const Header = () => {
    return (
        <div className="header">
            <div className="header__container container">
                <div className="header__left">
                    <Logo marginRight={18} />
                    <Nav/>
                </div>
                <ProfileLinks/>
            </div>
        </div>
    );
};

export default Header;