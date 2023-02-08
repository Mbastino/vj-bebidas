import './navbar.css';
import '../../pages/ItemDetailConteiner/itemDetailContainer.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink , Link } from 'react-router-dom';
 


const NavBar = () => {
  return (
    <div className='NavbarContainer'>
      <div className='logo'>
        <img src='../images/logo.jpg' alt='logo'></img>
      </div>
      <ul className='category'>
        <li>
          <NavLink classname={({isActive}) => isActive ? 'active' : 'inactive'} to='/'>Inicio</NavLink> 
        </li>
        <li>
          <NavLink classname={({isActive}) => isActive ? 'active' : 'inactive'} to='/category/Cervezas'>Cervezas</NavLink>
        </li>
        <li>
          <NavLink classname={({isActive}) => isActive ? 'active' : 'inactive'} to='/category/Vinos'>Vinos</NavLink>
        </li>
      </ul>
      <div>
        <Link to='/cart'>
        <CartWidget/>
        </Link>
      </div>
    </div>
  )
}

export default NavBar