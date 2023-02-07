import './item.css'
import {Link} from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <>
     <li className="itemContainer">
        <Link to={`/item/${producto.id}`}>
          <img className="imgProduct" alt={producto.name} src={producto.image}/>
        </Link>  
        <h2 className="nameProduct">{producto.name}</h2> 
        <h5>Precio: ${producto.price}</h5>
    </li>
    </> 
  )
}

export default Item