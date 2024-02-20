import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Card, Row, Col, Button, Form} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function App() {
  const options = ["Option 1", "Option 2", "Option 3"];
  
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" active>Home</Nav.Link>
            <Nav.Link href="#menu2">Menu 2</Nav.Link>
            <Nav.Link href="#menu3">Menu3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <Card>
              <Card.Header as="h5">Unary Call</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header as="h5">Server Side Streaming</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mt-4">
            <Card>
              <Card.Header>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Featured Title</h5>
                  <Form.Select aria-label="Select option" style={{ width: 'auto' }} className="ms-2">
                    {options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Select>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Table striped>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

