import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
const Cart = () => {
    const {cart, removeItem, clear} = useContext(cartContext)
  if(cart.length === 0){
    return <h1>No hay productos en el carrito</h1>
  }

  return (
    <div>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <div>
              <img className="" alt={product.name} src={`/image/${product.image}`}/>
              <h4>{product.name}</h4>          
              <h3>{product.quantity}</h3>
              <h4>${product.price}</h4>
              <button onClick={()=>removeItem(product.id)}>Eliminar</button>
            </div>
          </li>
            
        ))}
      </ul>
      <div>
        <button onClick={()=>clear()}>Vaciar carrito</button>
      </div>

    </div>
  )
}

export default Cart