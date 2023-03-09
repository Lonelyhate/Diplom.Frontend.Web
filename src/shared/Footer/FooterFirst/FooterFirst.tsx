import React, {FC} from 'react'
import "./FooterFirst.scss"
import { FaVk, FaYoutube, FaTelegramPlane, FaTelegram } from "react-icons/fa";

const FooterFirst: FC = () => {
  return (
    <div className='footer-first'>
            <h3 className='footer__subtitle'>Социальные сети</h3>
            <ul className='footer-first__list'>
              <li className='footer-first__item'>
                <a
                  className='footer-first__link'
                  href='https://vk.com/brandshop_ru'
                >
                  <FaVk fontSize={22} />
                  <span>Вконтакте</span>
                </a>
              </li>
              <li className='footer-first__item'>
                <a
                  className='footer-first__link'
                  href='https://vk.com/brandshop_ru'
                >
                  <FaYoutube fontSize={22} />
                  <span>YouTube</span>
                </a>
              </li>
              <li className='footer-first__item'>
                <a
                  className='footer-first__link'
                  href='https://vk.com/brandshop_ru'
                >
                  <FaTelegram fontSize={22} />
                  <span>Telegram</span>
                </a>
              </li>
            </ul>
          </div>
  )
}

export default FooterFirst