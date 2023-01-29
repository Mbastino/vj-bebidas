import './item.css'
import ItemCount from "../ItemCount/ItemCount"

const Item = ({producto}) => {
  return (
    <>
     <li className="itemContainer" key={producto.id}>
        <img className="imgProduct" alt={producto.name} src={producto.image}/>
        <h2 className="nameProduct">{producto.name}</h2> 
        <h5>Precio: ${producto.price}</h5>
    </li>
    <ItemCount/>
    </> 
  )
}

export default Item