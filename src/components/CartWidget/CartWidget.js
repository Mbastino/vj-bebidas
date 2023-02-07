import './cartwidget.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';



const CartWidget = () => {
  const {cart} = useContext(cartContext);

  
  return (
    <div className="botonCarro">
        <AiOutlineShoppingCart/>
        <span className='cantCarrito'>{cart.length}</span>
    </div>
  )
}

export default CartWidget