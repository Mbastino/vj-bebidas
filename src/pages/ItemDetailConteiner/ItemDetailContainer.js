import { useState } from "react"; 
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import Products from '../../data/Products.json'
import Loader from"../../components/Loaders/Loaders.js"


const ItemDetailContainer = () => {
  const [singleProduct, setSingleProduct] = useState([])
  const [hasProduct, setHasProduct] = useState(false);
  const {id} = useParams()

  const listproduct = new Promise((resolve) =>
    setTimeout(() => {
      resolve(Products);
    }, 3500)
  );

  listproduct
    .then((data) => setSingleProduct(data.find(prod => prod.id === parseInt(id))))
    .then((data) => setHasProduct(!data))

  return (
    <>
      {!hasProduct ? (
        <Loader />
      ) : (
      <div>
        <ItemDetail product={singleProduct}/>
      </div>
      )}
    </>
  )
}

export default ItemDetailContainer