import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.jpg'
import CartWidget from './CartWidget';

function BasicExample() {
  return (
    <Navbar class='navBar' bg="light" expand="lg">
      <Container class="containerNav">
        <img class='logo' src={logo} alt='logo'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cervezas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Aperitivos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vinos</NavDropdown.Item>
            </NavDropdown>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;