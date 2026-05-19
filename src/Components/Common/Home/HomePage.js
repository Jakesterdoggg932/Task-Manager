import { Button, Container, Row, Col, Image } from "react-bootstrap";

function HomePage() {
    return(
        <Container>
            <Row>
                <Col xs={4} sm={6}>
                    <Image 
                        src=""
                        fluid />
                </Col>
                <Col sm={6}>
                    <h1 className="font-weighjt-light">Task Manager</h1>
                    <p className="mt-4">
                        Blah
                        <br /><br />
                        Blah blah blah
                    </p>
                    <Button variant="outline-primary">Get Started</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;