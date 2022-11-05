import React from "react";
import { Card, Col, Row, Container, Button } from "react-bootstrap";

const Variants = ({ variants }) => {
  // image, size, color
  console.log('variants', variants)
  return (
    <Container>
      <Row className="justify-content-center">
        {variants.map((variant) => (
          <Col xs={3}>
            <Card className="variant-card">
              <div className="image-container d-flex">
                <Card.Img
                  className="variant-card-image"
                  variant="top"
                  src={variant.image}
                />
              </div>
              <Card.Body>
                <Card.Text>
                  <Row className='justify-content-between'>
                    <Col>
                      <b>Size:</b> {variant.size}
                    </Col>
                    <Col className='text-end'>
                      <b>Color:</b> {variant.color}
                    </Col>
                  </Row>
                </Card.Text>
                <Row>
                  <Button variant="success">Add to Cart</Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Variants;
      