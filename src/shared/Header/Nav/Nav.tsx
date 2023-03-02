import React, { FC } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import Menu from "../../../models/Menu/Menu";

const Nav: FC = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {Menu.ManuArray.map((item) => (
          <li key={item.url} className='nav__item'>
            <Link className='nav__link' to={item.url}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
