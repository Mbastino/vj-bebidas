import './cartwidget.css'
import { AiOutlineShoppingCart } from "react-icons/ai";



const CartWidget = () => {
  return (
    <div class="botonCarro">
        <AiOutlineShoppingCart/>
        <span class='cantCarrito'>1</span>
    </div>
  )
}

export default CartWidget