import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';
 


const NavBar = () => {
  return (
    <div class='NavbarContainer'>
      <div class='logo'>
        <img src='./images/logo.jpg' alt='logo'></img>
      </div>
      <ul class='category'>
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