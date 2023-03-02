import React, { FC, useEffect, useRef } from "react";
import "./ProfilePopup.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import Avatar from "../../../UI/Avatar/Avatar";
import { BsChevronRight } from "react-icons/bs";
import AuthProfileMenu from "../../../models/AuthProfileMenu/AuthProfileMenu";
import { userLogout } from "../../../store/reducers/User/ActionCreator";

const ProfilePopup: FC = () => {
  const { currentUser } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  return (
    <div className={"profile-popup"}>
      <ul className='profile-popup__list'>
        <li className='profile-popup__items'>
          <Link
            className={"profile-popup__link"}
            to={AuthProfileMenu.Urls.Account}
          >
            <div className='profile-popup__login'>
              <Avatar size={40} />
              <p className='profile-popup__login-text'>{currentUser?.email}</p>
            </div>
            <BsChevronRight
              className='profile-popup__account-svg'
              strokeWidth={1}
              color={"rgba(0,0,0,0.4)"}
              size={"20px"}
              height={20}
            />
          </Link>
        </li>
        {AuthProfileMenu.NavigationArray.map((item) => (
          <li
            key={item.url}
            className='profile-popup__items profile-popup__items_hover'
          >
            <Link className={"profile-popup__link"} to={item.url}>
              <p className='profile-popup__name'>{item.name}</p>
              <BsChevronRight
                strokeWidth={1}
                color={"rgba(0,0,0,0.4)"}
                size={"20px"}
                height={20}
              />
            </Link>
          </li>
        ))}
        <li className='profile-popup__items profile-popup__items_hover'>
          <Link
            className={"profile-popup__link"}
            to={AuthProfileMenu.Admin.url}
          >
            <p className='profile-popup__name'>{AuthProfileMenu.Admin.name}</p>
            <BsChevronRight
              strokeWidth={1}
              color={"rgba(0,0,0,0.4)"}
              size={"20px"}
              height={20}
            />
          </Link>
        </li>
        <li className='profile-popup__items'>
          <button
            onClick={() => {
              dispatch(userLogout());
            }}
            className='profile-popup__logout'
          >
            Выйти из аккаунта
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfilePopup;
