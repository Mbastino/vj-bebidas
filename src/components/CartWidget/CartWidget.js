import './cartwidget.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useEffect, useState} from 'react';
import { cartContext } from '../../context/cartContext';



const CartWidget = () => {
  const {cart} = useContext(cartContext);
  const [total, setTotal] = useState(0);

  useEffect(() =>{
    setTotal(cart?.reduce((prev, curr) => {
      return prev + curr.quantity
    }, 0))
  }, [cart])
  return (
    <div className="botonCarro">
        <AiOutlineShoppingCart/>
        <span className='cantCarrito'>{total}</span>
    </div>
  )
}

export default CartWidget