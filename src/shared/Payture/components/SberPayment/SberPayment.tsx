import React, { FC } from 'react'
import "./SberPayment.scss";
import sberLogo from "../../../../images/sberrr.png";

const SberPayment: FC = () => {
  return (
    <button className='sber-payment__btn'><img src={sberLogo} alt="" /> Pay</button>
  )
}

export default SberPayment