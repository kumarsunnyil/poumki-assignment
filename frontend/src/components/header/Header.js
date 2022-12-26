import { Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap";
import { Link, useNavigate  } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Assignment</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>

          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/my-notes">My Notes</Link>
            </Nav.Link>
            <NavDropdown title="Sunil Kumar" id="basic-nav-dropdown">
              <NavDropdown.Item>My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link
                  onClick={() => {
                    localStorage.removeItem("userInfo");
                    navigate("/");
                    console.log("Pushing to the home")
                  }}
                  to="/"
                >
                  Logout
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
