import './itemlistcontainer.css'
import { useEffect, useState } from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'
import ItemList from '../../components/ItemList/ItemList'

const ItemListContainer = () => {
  const [products, setProducts] = useState ([])

  const getProducts = fetch('../../../data/Products.json');

  useEffect(() => {
    getProducts
    .then((res) => {return res.json})
    .then((response) => {
      setProducts(response);
    }) 
    .catch((error) => console.log(error))
  });

    return (
    <div>
        <ItemList  productos={products}/>
        <ItemCount/>
    </div>
    
  )
}

export default ItemListContainer