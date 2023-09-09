import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NotFound = () => {
  return (
    <>
      <Container className="error-container">
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <h1>Dota 2 Error 404</h1>
            <p>Page Not Found</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFound;
