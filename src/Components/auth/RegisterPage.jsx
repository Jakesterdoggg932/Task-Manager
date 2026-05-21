import { Container, Button, Col, Form, Row  } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { use, useState } from "react";
import { signUp } from "@aws-amplify/auth";
function RegisterPage() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            console.log(username);
            console.log(email);
            console.log(password);
            console.log(confirmPassword);
            
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            const result = await signUp({
                username: email,
                password,
                options: {
                    userAttributes: {
                    email,
                    preferred_username: username
                    }
                }
            })
            console.log(result)
        } catch (error) {
            if (error.code === "UsernameExistsException") {
                alert("An account with this email already exists. Please log in instead.");
                navigate("/login");
            } else {
                console.error("Error signing up:", error);
                alert("An error occurred during registration. Please try again.");
            }
        }

        navigate("/validate");
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="font-weight-light">Register</h1>
                    <Form className="mt-4">
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Enter Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" onChange={evt => setUsername(evt.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={evt => setEmail(evt.target.value)}/>
                        </Form.Group>  
                        <Form.Group controlId="formBasicPassword" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={evt => setPassword(evt.target.value)}/>
                        </Form.Group>
                            <Form.Group controlId="formBasicPasswordConfirm" className="mt-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" onChange={evt => setConfirmPassword(evt.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="button" className="mt-4" onClick={handleRegister}>
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default RegisterPage;