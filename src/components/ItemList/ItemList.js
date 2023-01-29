import Item from "../Item/Item";
import './itemlist.css';
import {Link} from 'react-router-dom'


const ItemList = ({productos}) => {
  return (
    
    <ul className="itemCont">
      {productos.map((producto) =>(
        <Link to={`item/${producto.id}`}>
          <Item producto={producto}/>
        </Link>  
      ))
      }
    </ul>
  )
}

export default ItemList