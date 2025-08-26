import React, { useContext } from 'react';
import { Navbar, Container, Nav, Offcanvas, Button } from 'react-bootstrap';
import { ThemeContext } from '../../../context/ThemeContext';

export default function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar expand="lg" sticky="top" className="border-bottom" bg={theme === 'dark' ? 'dark' : 'light'} data-bs-theme={theme}>
      <Container>
        <Navbar.Brand href="#">LayoutKit</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#grid">Grid</Nav.Link>
              <Nav.Link href="#cards">Cards</Nav.Link>
              <Nav.Link href="#forms">Forms</Nav.Link>
            </Nav>
            <div className="d-flex">
              <Button variant={theme === 'dark' ? 'outline-light' : 'outline-dark'} onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
