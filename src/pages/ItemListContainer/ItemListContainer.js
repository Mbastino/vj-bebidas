import './itemlistcontainer.css'
import Products from '../../data/Products.json'
import { useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import Loader from '../../components/Loaders/Loaders'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [hasProduct, setHasProduct] = useState(false);

  const listproduct = new Promise((resolve) =>
    setTimeout(() => {
      resolve(Products);
    }, 3500)
  );

  listproduct
    .then((data) => setProducts(data))
    .then((data) => setHasProduct(!data));

  return (
    <>
      {!hasProduct ? (
        <Loader />
      ) : (
        <div>
          <ItemList productos={products} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;