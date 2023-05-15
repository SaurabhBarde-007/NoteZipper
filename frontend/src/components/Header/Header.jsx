import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

// import {Button,Container,Form,Nav,Navbar,NavDropdown} from 'react-bootstrap'



const Header = () => {

  return (
    <Navbar bg="primary" expand="lg" variant='dark'>
      <Container >
        <Navbar.Brand >
          <Link to="/">
            Note Zipper
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='m-auto'>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            </Form>
          </Nav>

          <Nav>
            <Nav.Link>
              <Link to="/mynotes">
                My Notes
              </Link>
            </Nav.Link>
            <NavDropdown title="Saurabh Barde" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;