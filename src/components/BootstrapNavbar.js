import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Navbar.css";
function BootstrapNavbar() {
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="variant"
      variant="light"
      className="border-bottom"
      style={{ height: "90px" }}
    >
      <Container>
        <Navbar.Brand href="/">BLOGLAND</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto link-position">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/latest">Latest</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BootstrapNavbar;
