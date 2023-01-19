
import './items.css'

const Items = (producto) => {
  return (
   <div className='Items'>
      <img className='productsImg' src={producto.image} alt=''></img>
      <h2 className='productsName'>{producto.name}</h2>
      <div className='productsDetail'>
        <p className='productPrice'></p>
      </div>
      <button>Detalle</button>
   </div>
  )
}

export default Items