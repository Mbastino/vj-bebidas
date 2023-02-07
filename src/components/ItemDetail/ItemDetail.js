import ItemCount from "../ItemCount/ItemCount"
import {useState, useContext} from "react"
import { cartContext } from "../../context/cartContext";


const ItemDetail = ({product}) => {
  const {addItem}=useContext(cartContext);
  const [contador,setContador] = useState (0);
  const stock = 4;
  return (
    <div>
        <img className="" alt={product.name} src={product.image}/>
        <h2 className="">{product.name}</h2> 
        <h4 className="">{product.description}</h4>
        <h5>Precio: ${product.price}</h5>
        <ItemCount contador={contador} actualizarValor={setContador} stock={stock}/>
        <div>
            <button onClick={()=> addItem(product, contador)}>Agregar al carrito</button>
        </div>
    </div> 
  )
}

export default ItemDetail