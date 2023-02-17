import { useEffect, useState } from "react"; 
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import { getFirestore, getDocs, collection} from 'firebase/firestore';


const ItemDetailContainer = () => {
  const [singleProduct, setSingleProduct] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const db = getFirestore();
    const querySnapshot = collection(db, "products")
    getDocs(querySnapshot).then((response) => {
      const data = response.docs.map((doc) => {
        return {id:doc.id, ...doc.data()}
      });
      setSingleProduct(data.find(prod => prod.id === id))
    })
  }, [id]);

  return (
      <div>
        <ItemDetail product={singleProduct}/>
      </div>
  )
}

export default ItemDetailContainer