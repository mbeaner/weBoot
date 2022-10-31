import React from "react";
import { Form, InputGroup } from "react-bootstrap";


export default function TextSearch() {


  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">🔍</InputGroup.Text>
      <Form.Control
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  )
}