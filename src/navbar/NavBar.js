import { Button, Navbar, Container, Nav, NavDropdown, FormControl, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';



const NavBar = () => {
  return (
  <div className="header">
   <div>
     <Navbar expand="lg" className="navegador" >
      <Container fluid >
        <Navbar.Brand href="#" className="Name">Mistica</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
        <NavDropdown title="Productos" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3"></NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Skin care</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Accesorios
                      </NavDropdown.Item>
                      </NavDropdown>
                    <Nav.Link href="#" disabled>
                FAQ
              </Nav.Link>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Quienes Somos </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar..."
              className="me-2"
              aria-label="Search"
            />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </Navbar.Collapse>

    <CartWidget />
  </Container>
</Navbar>
   </div>
  </div>
  );
}

export default NavBar;