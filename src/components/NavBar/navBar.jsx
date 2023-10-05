import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css'
import CartWidget from '../cartWidget/cartWidget'

function NavBar() {
  return (
    <>
    <header className='navbar-header'>
      <Navbar className='navBar' bg="dark" data-bs-theme="dark">
        <Container className='navContainer'>
          <Navbar.Brand href="#home">MiauMiau</Navbar.Brand>
          <Nav className='navList'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Productos</Nav.Link>
            <Nav.Link href="#aboutUs">Sobre nosotros</Nav.Link>
            <Nav.Link href="#profile">Perfil</Nav.Link>
          </Nav>
      <CartWidget />
        </Container>
      </Navbar>
      </header>
    </>
  );
}

export default NavBar;