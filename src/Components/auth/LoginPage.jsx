import { Button, Col, Container, Form, Row } from "react-bootstrap";


function LoginPage() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Login</h1></Col>
            </Row>
            <Row className="px-4 my-5">
                <Col sm={6}>
                    <Form>
                        <Form.Group className="nb-3" controlId="formBasicEmail">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="nb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" minLength={8} placeholder="Enter Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">Login &gt;&gt;</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage;