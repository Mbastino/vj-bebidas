import {Link} from "react-router-dom"
import './items.css'

const Items = (id, marca, estilo, price, image ) => {
  return (
   <div className='Items'>
      <img className='productsImg' src={image} alt=''></img>
      <h2 className='productsName'>{marca + estilo}</h2>
      <div className='productsDetail'>
        <p className='productPrice'>{price}</p>
      </div>
      <Link to='/Items/${id}' >Detalles</Link>
   </div>
  )
}

export default Items