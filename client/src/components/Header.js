
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom"
import '../components/Header.css'


const Header = () => {


  return (
    
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
    <Container>
      <Navbar.Brand className="brand" href="/" >Keep App</Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                
              />
            </Form>
        
        </Nav>
        <Nav>
          
            <>
              <Nav.Link href ="/mynotes">My Notes</Nav.Link>
              <NavDropdown
                
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/profile">
                  {/* <img
                    alt=""
                    src={`${userInfo.pic}`}
                    width="25"
                    height="25"
                    style={{ marginRight: 10 }}
                  /> */}
                  My Profile
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item onClick={()=> {
                  localStorage.removeItem("userInfo")
                 
                }}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </>
          
            <Nav.Link href="/login">Login</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header