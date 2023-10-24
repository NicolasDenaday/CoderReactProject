import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css'
import CartWidget from '../cartWidget/cartWidget'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavLink, Link } from 'react-router-dom'

function NavBar() {

  const categorias = [
    { label: "Joyeria", to: "jewelery" },
    { label: "Electronica", to: "electronics" },
    { label: "Ropa de hombre", to: "men's clothing" },
    { label: "Ropa de mujer", to: "women's clothing" },
  ]

  return (
    <>
      <header className='navbar-header'>
        <Navbar className='navBar' bg="dark" data-bs-theme="dark">
          <Container className='navContainer'>
            <Navbar.Brand><NavLink className="navLink" to="/">MiauMiau</NavLink></Navbar.Brand>
            <Nav className='navList'>
              <NavLink to="/" className="navLink">Inicio</NavLink>
              <NavLink to="/products" className="navLink">Productos</NavLink>
              <DropdownButton className="dropDown" id="dropdown-basic-button" title="Categorías">
                {categorias.map((categoria) => <Link className="navLink" key={categoria.to} to={`/category/${categoria.to}`}>{categoria.label}</Link>)}
              </DropdownButton>
            </Nav>
            <CartWidget />
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default NavBar;