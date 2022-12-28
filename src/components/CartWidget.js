import React from 'react'
import { Button } from 'react-bootstrap'
import cart from '../assets/img/cart.png'

const CartWidget = () => {
  return (
    <div class="botonCarro">
        <Button variant="primary"><img class='carrito' src={cart} alt='carrito'/><span> 1</span></Button>
    </div>
  )
}

export default CartWidget