import { useEffect, useState } from "react"; 
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import { getFirestore, doc, getDoc} from 'firebase/firestore';


const ItemDetailContainer = () => {
  const [singleProduct, setSingleProduct] = useState([])
  const {id} = useParams()

  const listproduct = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, 'items', id);

    getDoc(querySnapshot)
    .then((response) => {
      console.log(response.data())
     /*  setSingleProduct({id: response.id, ...response.data() }) */
    })
    .cath((error)=>console.log(error))
  }

  useEffect(() => {
    listproduct();
  }, []);

  return (
    <>
      <div>
        <ItemDetail product={singleProduct}/>
      </div>
    </>
  )
}

export default ItemDetailContainer