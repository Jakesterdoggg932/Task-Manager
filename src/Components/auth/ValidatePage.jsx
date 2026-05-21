import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmSignUp } from "@aws-amplify/auth";
import { resendSignUpCode } from "@aws-amplify/auth";

function ValidatePage() {

    const [username, setUsername] = useState("");
    const [authenticationCode, setAuthenticationCode] = useState("");
    const navigate = useNavigate();

    const handleRegisterValidation = async (e) => {
        e.preventDefault();
        try {
            console.log("Validating user with username:", username, ", and authenticationCode:", authenticationCode);

            await confirmSignUp({
                username: username,
                confirmationCode: authenticationCode
            });

            console.log("User confirmed:", username);
            navigate("/login");

        } catch (error) {
            console.error("Error confirming sign up:", error);
            alert("An error occurred while validating your account. Please try again.");
        }
    }

    const handleResendCode = async (e) => {
        e.preventDefault();
        try {
            console.log("Resending code for username:", username);

            await resendSignUpCode({ username });
            console.log("Code resent for user:", username);
            alert("A new authentication code has been sent to your email.");
        } catch (error) {
            console.error("Error resending code:", error);
            alert("An error occurred while resending the authentication code. Please try again.");
        }
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="font-weight-light">Validate Account</h1>
                    <Form className="mt-4">
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Enter Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" onChange={evt => setUsername(evt.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCode" className="mt-3">
                            <Form.Label>Authentication Code</Form.Label>
                            <Form.Control type="text" placeholder="Enter Authentication Code" onChange={evt => setAuthenticationCode(evt.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="button" className="mt-4" onClick={handleRegisterValidation}>
                            Validate Account
                        </Button>
                        <Button variant="secondary" type="button" className="mt-4 ms-3" onClick={handleResendCode}>
                            Resend Code
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ValidatePage;