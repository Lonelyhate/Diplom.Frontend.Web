import React, {FC} from 'react'
import "./CatalogList.scss";
import { IProduct } from '../../../../models/Models/Product/Product';
import ProductItem from '../../../../shared/ProductItem/ProductCard';

interface ICatalogList {
  products: IProduct[] | null
}

const CatalogList: FC<ICatalogList> = ({products}) => {
  return (
    <ul className='catalog-list'>
      {products!.map(item => (
        <li key={item.id} className="catalog-list__item">
          <ProductItem sizeVisable={true} product={item} />
        </li>
      ))}
    </ul>
  )
}

export default CatalogList