
import './items.css'

const Items = (id, marca, estilo, price, image ) => {
  return (
   <div className='Items'>
      <img className='productsImg' src={image} alt=''></img>
      <h2 className='productsName'>{marca + estilo}</h2>
      <div className='productsDetail'>
        <p className='productPrice'>{price}</p>
      </div>
      <button>Detalle</button>
   </div>
  )
}

export default Items