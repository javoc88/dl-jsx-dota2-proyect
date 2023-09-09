import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const Guides = () => {
  return (
    <>
      <Container className="guides-container">
        <div className="text-area">
          <h1>Guides</h1>
          <h4>Need help getting started?</h4>
          <p>Leave us your details and we will contact you</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Ask us</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="example: my favorite hero is Abbadon and I want to learn the basics"
              />
            </Form.Group>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Guides;
