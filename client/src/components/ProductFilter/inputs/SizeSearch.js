import React from "react";

import { Form } from "react-bootstrap";

export default function SizeSearch() {
  return (
    <Form>
      {["XS", "S", "M", "L", "XL", "XXL"].map((value) => (
        <Form.Check
          value={value}
          id={value}
          label={value}
          name="group1"
          className='size-checkbox'
          type={"checkbox"}
        />
      ))}
    </Form>
  );
}
