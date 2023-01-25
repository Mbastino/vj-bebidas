import Item from "../Item/Item"


const ItemList = ({productos}) => {
  return (
    <ul>
      {productos.map((producto) =>(
        <Item producto={producto}/>
      ))
      }
    </ul>
  )
}

export default ItemList