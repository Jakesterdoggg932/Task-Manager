import { use, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "@aws-amplify/auth";

function TaskManager(props) {
const navigate = useNavigate();

  useEffect(() => {
    async function checkAuthentication() {
      try {
        const user = await getCurrentUser();

        console.log("Authenticated user:", user);
      } catch (error) {
        console.error("Error checking authentication:", error);

        navigate("/login");
      }
    }

    checkAuthentication();
  }, [navigate]);

    return (
        <Container>
            <h1 className="font-weight-light">Task Manager</h1>
            <p className="lead">Welcome to your task manager dashboard!</p>
        </Container>
    )
}

export default TaskManager;