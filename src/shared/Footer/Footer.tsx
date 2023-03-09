import React, { FC } from "react";
import {
  BLOG_URL,
  CONTACT_URL,
  EXCHANGE_FAQ_URL,
  FAQ_URL,
  LOYALTY_URL,
  MAGAZINE_URL,
  SHIPPING_FAQ_URL
} from "../../models/urls";
import "./Footer.scss";
import FooterFirst from "./FooterFirst/FooterFirst";
import FooterItem from "./FooterItem/FooterItem";
import FooterTwo from "./FooterTwo/FooterTwo";

export type typeLink = {
  name: string;
  link: string;
};

const Footer: FC = () => {
  const linksOne: typeLink[] = [
    {
      name: "Помощь покупателю",
      link: FAQ_URL
    },
    {
      name: "Доставка и оплата",
      link: SHIPPING_FAQ_URL
    },
    {
      name: "Возврат",
      link: EXCHANGE_FAQ_URL
    },
    {
      name: "Программа лояльности",
      link: LOYALTY_URL
    }
  ];

  const linksTwo: typeLink[] = [
    {
      name: "Контакты",
      link: CONTACT_URL
    },
    {
      name: "Магазины",
      link: MAGAZINE_URL
    },
    {
      name: "Блог",
      link: BLOG_URL
    }
  ];

  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <div className='footer__body'>
          <FooterFirst />
          <FooterTwo />
          <FooterItem title='Поддержка' items={linksOne} />
          <FooterItem title='Информация' items={linksTwo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
