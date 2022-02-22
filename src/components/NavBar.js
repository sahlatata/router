import { Link, NavLink } from "react-router-dom"
import { Container, Nav, Navbar} from "react-bootstrap"
const NavBar =()=>{


return(
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home" style={{color:'#4682B4'}}>STREAMVOX</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
    <NavLink  to='/' className="navLink">Home</NavLink>
      <NavLink to='/cards' className="navLink">Cards</NavLink>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    )
}

export default NavBar