import { useState } from "react"; 
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import Products from '../../data/Products.json'


const ItemDetailContainer = () => {
    const [singleProduct, setSingleProduct] = useState({})


    const listproduct = new Promise((resolve) =>
    setTimeout(() => {
      resolve(Products);
    }, 2000)
  );


  listproduct
    .then((data) => setSingleProduct(data))


  return (
    <div>
        <ItemDetail productos={singleProduct}/>
    </div>
  )
}

export default ItemDetailContainer