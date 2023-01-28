import Item from "../Item/Item"
import './itemlist.css'


const ItemList = ({productos}) => {
  return (
    <ul className="itemCont">
      {productos.map((producto) =>(
        <Item producto={producto}/>
      ))
      }
    </ul>
  )
}

export default ItemList