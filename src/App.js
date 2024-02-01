import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';



function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">KAAY JEUND</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Produits</Nav.Link>
              <Nav.Link href="#pricing">Contacts</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/image/Sac à main.webp" />
      <Card.Body>
        <Card.Title>Joli sac à main</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
        <Card className='card1' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/image/sac à main rétro bleu.jpg" />
      <Card.Body>
        <Card.Title>Joli sac à main rétro bleu</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/image/sac vert.avif" />
      <Card.Body>
        <Card.Title>Joli sac à main vert</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>

      </div>
    </>
  );
}

export default App;
