import './navbar.css';
import '../../pages/ItemDetailConteiner/itemDetailContainer.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
 


const NavBar = () => {
  return (
    <div className='NavbarContainer'>
      <div className='logo'>
        <img src='../images/logo.jpg' alt='logo'></img>
      </div>
      <ul className='category'>
        <li>
          <NavLink activeclassname="active" classname="inactive" to='/'>Inicio</NavLink> 
        </li>
        <li>
          <NavLink activeclassname="active" classname="inactive" to='/category/Cervezas'>Cervezas</NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" classname="inactive" to='/category/Vinos'>Vinos</NavLink>
        </li>
      </ul>
      <div>
        <CartWidget/>
      </div>
    </div>
  )
}

export default NavBar