import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { typeLink } from '../Footer'
import "./FooterItem.scss"

interface IFooterItem {
    title: string
    items: typeLink[]
}

const FooterItem: FC<IFooterItem> = ({items, title}) => {
  return (
    <div className='footer-item' >
        <h3 className="footer__subtitle">{title}</h3>
        <ul className="footer-item__list">
            {items.map(item => (
                <li key={item.link} className="footer-items__item">
                    <Link className='footer-items__link' to={item.link} >{item.name}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FooterItem