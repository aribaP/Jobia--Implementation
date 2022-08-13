import { Navbar ,Nav,Container,NavDropdown,Button,Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import JobiaLogo from "../assets/Jobia_Logo.png";


function NavBarComponent2() {
  return (
    <Navbar bg="light" expand="lg" style={{ boxShadow: "2px 10px 4px rgb(0 0 0 / 25%)" }}>
      <Container fluid>
        <Navbar.Brand href="#">
        <Link to="/" class="navbar-brand" style={{ paddingLeft:"20px" }}>
            <img src={JobiaLogo} alt="" width="100%" height="24" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="navbar-nav me-auto mb-2 px-3 mb-lg-0"
           
            navbarScroll
         >
            <Nav.Link as={Link} to="/about">   About US</Nav.Link>
            <Nav.Link as={Link} to="/contact">  Contact Us</Nav.Link>
    
            
           
          </Nav>
          <Form className="d-flex" style={{ paddingRight:"20px" }}>
        
             
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent2;
