import './itemlistcontainer.css'
import { useEffect, useState } from 'react'
import { requestAllProducts } from '../../helpers/dataProduct'
import ItemCount from '../../components/ItemCount/ItemCount'

const ItemListContainer = () => {
  
  return (
    <div>
        <ItemCount/>
    </div>
    
  )
}

export default ItemListContainer