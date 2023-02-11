import './itemlistcontainer.css';
import Products from '../../data/Products.json';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import Loader from '../../components/Loaders/Loaders.js';
import { getFirestore, getDocs, collection} from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState ([])
  const [hasProduct, setHasProduct] = useState(false);
  const {category} = useParams()


  const listproduct = () =>{
    const db = getFirestore;
    const querySnapshot = collection(db, "products");
    getDocs(querySnapshot).then((response) => {
      const data = response.docs.map((doc) => {
        return {id:doc.id, ...doc.data()}
      });
      setProducts(data)
      hasProduct(!data)
    }).catch(error=>console.log(error))
  };



/*   const listproduct = new Promise((resolve) =>
    setTimeout(() => {
      resolve(Products);
    }, 3500)
  );

  listproduct
    .then((data) => setProducts(data))
    .then((data) => setHasProduct(!data));
 */
 useEffect (() => {
  const filterProduct = products.filter((product) => product.category === category)
  setFilteredProduct(filterProduct)
}, [category]) 

  return (
    <>
      {!hasProduct ? (
        <Loader />
      ) : (
        <div className='listContainer'>
          <ItemList productos={category? filteredProduct : products} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;