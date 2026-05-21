import { Authenticator } from "@aws-amplify/ui-react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signIn } from "@aws-amplify/auth";


function LoginPage() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async () => {
        try {
            console.log("Attempting to sign in with username:", username);
            const user = await signIn({ username, password });
            console.log("Sign in successful for user:", user);
            navigate("/app");
        } catch (error) {
            if (error.code === "UserNotConfirmedException") {
                alert("Your account is not confirmed. Please check your email for the validation code.");
                navigate("/validate");
                return;
            }
            if (error.code === "NotAuthorizedException") {
                alert("Incorrect username or password. Please try again.");
                return;
            }
            console.error("Error signing in:", error);
            alert("An error occurred during login. Please check your credentials and try again.");
        }
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="font-weight-light">Login</h1>
                    <Form className="mt-4">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={evt => setUsername(evt.target.value)}/>
                        </Form.Group>  
                        <Form.Group controlId="formBasicPassword" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={evt => setPassword(evt.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="button" className="mt-4" onClick={handleLogin}>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage;