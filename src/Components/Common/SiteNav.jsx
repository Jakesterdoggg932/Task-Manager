import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '@aws-amplify/auth';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SiteNav(props) {

    const location = useLocation();

    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await signOut();
            setIsAuthenticated(false);
            navigate("/");
        } catch (error) {
            console.error("Error signing out:", error);
            alert("An error occurred while signing out. Please try again.");
        }

    }
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
    checkAuthentication();
    }, [location]);

    async function checkAuthentication() {
        try {
            const user = await getCurrentUser();

            console.log("Authenticated user:", user);

            setIsAuthenticated(true);
        } catch (error) {
            console.log("No authenticated user");

            setIsAuthenticated(false);
    }
}

   
    
    useEffect(() => {
    checkAuthentication();
    }, [location]);

    console.log("isAuthenticated:", isAuthenticated);
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
                        {isAuthenticated ? (
                            <>
                                <Nav.Link href="/app">Dashboard</Nav.Link>

                                <Nav.Link onClick={handleLogout}>
                                Logout
                                </Nav.Link>
                            </>
                            ) : (
                            <>
                                <Nav.Link href="/login">Login</Nav.Link>

                                <Nav.Link href="/register">Register</Nav.Link>
                            </>
                            )}
                        </Nav>
                        
                        {
                            
                            props.isAuthenticated === false && (
                                <Nav className="ms-md-auto">
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/register">Register</Nav.Link>
                                </Nav>
                            )
                        }
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default SiteNav;