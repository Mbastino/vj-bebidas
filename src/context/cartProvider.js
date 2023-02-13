import { cartContext } from "./cartContext";
import { useState } from 'react';

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const addItem = (item, quantity) => {
        let newCart;
        let product = cart.find((prod) => prod.id === item.id);
        if (product) {
            product.quantity += quantity;
            if(product.quantity > product.stock){
                alert ('No hay stock disponible')
                return;
            }
            newCart = [...cart];
        } else {
            product = {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: quantity,
            description: item.description,
            category: item.categoryId,
            img:item.imageId,
            };
            newCart = [...cart, product];
        }
        setCart(newCart)        
    };

    const removeItem = (productId)=>{
        setCart(cart.filter((product) => product.id !== productId))
    }

    const clear = () => {
        setCart([])
    }

  return (
    <cartContext.Provider value={{cart, addItem, clear, removeItem}}>
        {children}
    </cartContext.Provider>
  )
}

export default CartProvider