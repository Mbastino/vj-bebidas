import './itemlistcontainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import Loader from '../../components/Loaders/Loaders.js';
import { getFirestore, getDocs, collection, query, where} from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [hasProduct, setHasProduct] = useState(true);
  const {category} = useParams()

  const listproduct = () =>{
    const db = getFirestore();
    const querySnapshot = collection(db, "products")
setTimeout(() => {

  if(category){
    const newConfiguration = query(querySnapshot, where("categoryId","==", category));
    getDocs(newConfiguration).then((response) => {
      const data = response.docs.map((doc) => {
        return {id:doc.id, ...doc.data()}
      });
      setHasProduct(false)
      setProducts(data)
    }).catch(error=>console.log(error))
  } else {
    getDocs(querySnapshot).then((response) => {
      const data = response.docs.map((doc) => {
        return {id:doc.id, ...doc.data()}
      });
      setHasProduct(false)
      setProducts(data)
    }).catch(error=>console.log(error))
  }
  }, 3500)
}

useEffect(() => {
  listproduct();
}, [category]);

 

  return (
    <>
      <div className='listContainer'>
        {hasProduct ?
          <Loader /> : <ItemList productos={products} />
        }
      </div>
    </>
  );
};

export default ItemListContainer;