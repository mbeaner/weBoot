import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const Address = ({ address, handleInputChange, handleFormSubmit }) => {
  return (
    <Card id="address-card">
      <Card.Body>
        <Form onSubmit={handleFormSubmit} onChange={handleInputChange}>
          <Form.Group className="m-3">
            <Form.Label>Street</Form.Label>
            <Form.Control
              type="text"
              defaultValue={address?.street}
              name="address-street"
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              defaultValue={address?.city}
              name="address-city"
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              defaultValue={address?.state}
              name="address-state"
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              defaultValue={address?.zip}
              name="address-zip"
            />
          </Form.Group>
          <Button
            className="m-3"
            variant="success"
            defaultValue="m-3"
            type="submit"
          >
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
