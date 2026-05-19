import { Col, Container, Row } from "react-bootstrap";

function AboutPage() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>
                        Task Manager
                    </h1>
                    <p>
                        This app is my attempt to create a place where people like me can organize their to-do list in the most familiar form, a game. <br />By gamifying my planner I've found it easier and more rewarding to complete tasks, and I hope this helps you too. <br />Game on, Losers <br />-Jake
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutPage;