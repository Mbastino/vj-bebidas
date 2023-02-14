import './itemdetail.css'
import ItemCount from "../ItemCount/ItemCount"
import {useState, useContext} from "react"
import { cartContext } from "../../context/cartContext";


const ItemDetail = ({product}) => {
  const {addItem}=useContext(cartContext);
  const [contador,setContador] = useState (0);
  const stock = 4;
  return (
    <div className='contDetail'>
        <img className="imgDetail" alt={product.name} src={`/images/${product.imageId}`}/>
        <h2 className="nameDetail">{product.name}</h2> 
        <h4 className="desDetail">{product.description}</h4>
        <h5 className="priceDetail">Precio: ${product.price}</h5>
        <ItemCount contador={contador} actualizarValor={setContador} stock={product.stock}/>
        <div>
            <button onClick={()=> addItem(product, contador)}>Agregar al carrito</button>
        </div>
    </div> 
  )
}

export default ItemDetail