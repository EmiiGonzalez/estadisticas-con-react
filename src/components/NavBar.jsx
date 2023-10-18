import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/participantes">Participantes</Nav.Link>
            <NavDropdown title="Preguntas" id="basic-nav-dropdown">
              <NavDropdown.Item href="/p1">Primer pregunta</NavDropdown.Item>
              <NavDropdown.Item href="/p2">Segunda pregunta</NavDropdown.Item>
              <NavDropdown.Item href="/p3">Tercera pregunta</NavDropdown.Item>
              <NavDropdown.Item href="/p4">Cuarta pregunta</NavDropdown.Item>
              <NavDropdown.Item href="/p5">Quinta pregunta</NavDropdown.Item>
              <NavDropdown.Item href="/p6">Sexta pregunta</NavDropdown.Item>
              <NavDropdown.Item href="/p7">Septima pregunta</NavDropdown.Item>
              <NavDropdown.Item href="/p8">Octava pregunta</NavDropdown.Item>
              <NavDropdown.Item href="/p9">Novena pregunta</NavDropdown.Item>
              <NavDropdown.Item href="/p10">Decima pregunta</NavDropdown.Item>
              <NavDropdown.Item href="/p11">Onceava pregunta</NavDropdown.Item>
              <NavDropdown.Item href="/p12">Doceava pregunta</NavDropdown.Item>
              <NavDropdown.Item href="/p13">Treceava pregunta</NavDropdown.Item>
              <NavDropdown.Item href="/p14">Catorceava pregunta</NavDropdown.Item>
              <NavDropdown.Item href="/p15">Quinceava pregunta</NavDropdown.Item>
              <NavDropdown.Item href="/p16">Dieciséisava pregunta</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
