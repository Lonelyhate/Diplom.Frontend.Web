import React, {FC} from 'react'
import { Link } from 'react-router-dom'

const ModalContentProduct: FC = () => {
  return (
    <div className='modal-product' >
        <div className="modal-product__header">
            <Link to={"test"} >Перейти на страницу товара</Link>
            <div className="modal-product__middle">
                
            </div>
        </div>
    </div>
  )
}

export default ModalContentProduct