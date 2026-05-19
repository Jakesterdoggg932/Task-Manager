import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function SiteNav() {
    return (
        <header>
            <Navbar bg="dark" expands="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="*">Task Manager</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Nav className="ms-md-auto">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href='/register'>Register</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>1
                </Container>
            </Navbar>
        </header>
    )
}

export default SiteNav;