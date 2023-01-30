import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';
 


const NavBar = () => {
  return (
    <div className='NavbarContainer'>
      <div className='logo'>
        <img src='../images/logo.jpg' alt='logo'></img>
      </div>
      <ul className='category'>
        <li>Inicio</li>
        <li>Cervezas</li>
        <li>Vinos</li>
      </ul>
      <div>
        <CartWidget/>
      </div>
    </div>
  )
}

export default NavBar