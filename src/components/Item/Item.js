import './item.css'
import ItemCount from "../ItemCount/ItemCount"

const Item = ({producto}) => {
  return (
    <li className="itemContainer" key={producto.id}>
        <img className="imgProduct" alt={producto.name} src={producto.image}/>
        <h2 className="nameProduct">{producto.name}</h2> 
        <h4 className="descProduct">{producto.description}</h4>
        <h5>Precio: ${producto.price}</h5>
        <ItemCount/>
    </li>
  )
}

export default Item