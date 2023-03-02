import React, { FC } from "react";
import { Link } from "react-router-dom";
import AdminNavigation from "../../../../models/AdminNavigation/AdminNavigation";
import "./AsideAdmin.scss";

const AsideAdmin: FC = () => {
  return (
    <aside className='aside-admin'>
      <ul className='aside-admin__list'>
        {AdminNavigation.NavigationArray.map((item) => (
          <li key={item.url} className='aside-admin__item'>
            <Link to={item.url} className='aside-admin__link'>
              <span>{item.name}</span>
              {item.icon && <item.icon />}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AsideAdmin;
