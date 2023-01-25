import './cartwidget.css'
import { AiOutlineShoppingCart } from "react-icons/ai";



const CartWidget = () => {
  return (
    <div className="botonCarro">
        <AiOutlineShoppingCart/>
        <span className='cantCarrito'>1</span>
    </div>
  )
}

export default CartWidget