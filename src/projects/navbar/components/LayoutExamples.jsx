import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function LayoutExamples() {
  return (
    <>
      <section id="grid" className="py-4">
        <Container>
          <h2 className="mb-3">Responsive Grid</h2>
          <Row className="g-3">
            <Col xs={12} md={6} lg={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>One</Card.Title>
                  <Card.Text>Responsive columns using Bootstrap’s grid.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Two</Card.Title>
                  <Card.Text>Try resizing the window to see behavior.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Three</Card.Title>
                  <Card.Text>Cards keep a clean, consistent look.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="cards" className="py-4 bg-body-tertiary">
        <Container>
          <h2 className="mb-3">Card Variations</h2>
          <Row className="g-3">
            {[1,2,3,4].map(n => (
              <Col key={n} xs={12} md={6}>
                <Card>
                  <Card.Header>Card {n}</Card.Header>
                  <Card.Body>
                    <Card.Title>Utility classes</Card.Title>
                    <Card.Text>Mix <code>p-*</code>, <code>gap-*</code>, and <code>g-*</code> for spacing.</Card.Text>
                    <Button variant="primary">Action</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="forms" className="py-4">
        <Container>
          <h2 className="mb-3">Form Starter</h2>
          <Form className="row g-3">
            <Col md={6}>
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control id="name" placeholder="Thomas Cani" />
            </Col>
            <Col md={6}>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control type="email" id="email" placeholder="thomascx5@gmail.com" />
            </Col>
            <Col xs={12}>
              <Form.Label htmlFor="msg">Message</Form.Label>
              <Form.Control as="textarea" id="msg" rows={3} placeholder="Say hello…" />
            </Col>
            <Col xs={12}>
              <Button type="submit">Submit</Button>
            </Col>
          </Form>
        </Container>
      </section>
    </>
  );
}
