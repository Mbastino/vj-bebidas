import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";


const Cart = () => {
    const {cart, removeItem, clear} = useContext(cartContext);
    const [order, setOrder] = useState({});
    const db = getFirestore();

    useEffect(() => {
      setOrder({
        buyer:{
          name:'Jazmin Robledo',
          phone:'+549 3517824692',
          mail:'jrobledo@gmail.com',
        },
        items: cart.map((product) => {
          const {name, price, id} = product;
          return {name, price, id};
        }),
        total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
      })
    }, [cart]);

  if(cart.length === 0){
    return <h1>No hay productos en el carrito</h1>
  }

  const createOrder = () => {
    const querySnapshot = collection(db, 'orders');

    addDoc(querySnapshot, order)
    .then((response) => {
      console.log(response.id)
      updateStockProducts();
      alert('Orden creada')})
    .catch((error) => console.log(error))
  }

  const updateStockProducts = () => {
    cart.forEach((product) => {
      const querySnapshot = doc(db, 'products', product.id);

      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
      .then(() => {

      }) 
      .catch((error) => console.log(error))
    })
  }

  return (
    <div>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <div>
              <img alt={product.name} src={`/image/${product.image}`}/>
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
      <div>
        <button onClick={createOrder}>Crear orden</button>
      </div>
    </div>
  )
}

export default Cart