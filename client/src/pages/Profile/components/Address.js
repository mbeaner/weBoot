import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const Address = ({ address, handleInputChange, handleFormSubmit }) => {
  if (!address) return null;
  const { street, city, state, zip } = address;
  return (
    <Card id="address-card">
      <Card.Body>
        <Form onSubmit={handleFormSubmit} onChange={handleInputChange}>
          <Form.Group className="m-3">
            <Form.Label>Street</Form.Label>
            <Form.Control
              type="text"
              defaultValue={street}
              name="address-street"
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" defaultValue={city} name="address-city" />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              defaultValue={state}
              name="address-state"
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" defaultValue={zip} name="address-zip" />
          </Form.Group>
          <Button className='m-3' variant="success" defaultValue="m-3" type="submit">
            Save
          </Button>
          <Button variant="danger" defaultValue="m-3" type="reset">
            Cancel
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Address;
