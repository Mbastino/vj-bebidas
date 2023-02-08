import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
const Cart = () => {
    const {cart} = useContext(cartContext)
  return (
    <div>
        {cart.map((product) => (
            <div>
            <h4 key={product.id}>{product.name}</h4>
            <img className="" alt={product.name} src={product.image}/>
            <h3>{product.quantity}</h3>
            <h4>${product.price}</h4>
            </div>
        ))}
    </div>
  )
}

export default Cart