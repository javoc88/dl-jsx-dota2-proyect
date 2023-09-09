import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="navbar bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="src/assets/imgs/dota2-logo.png"
              width="140"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/heroes">Heroes</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/guides">Guides</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
