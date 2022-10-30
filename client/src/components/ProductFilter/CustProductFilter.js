import React, { useState, useEffect } from "react";
import { Tabulator } from "tabulator-tables";
import { remove, map } from "lodash";
import { Container, Row, Col, Accordion, Form, Button } from "react-bootstrap";
import { PriceSearch, ColorSearch } from "./inputs/index.js";

export default function CustProductFilter() {
  const [filter, setFilter] = useState(null);
  const [update, setUpdate] = useState(null);

  return (
    <>
      <h1>Filters</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>💸 Price</h5>
          </Accordion.Header>
          <Accordion.Body>
            <PriceSearch />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>🌈 Color</h5>
          </Accordion.Header>
          <Accordion.Body>
            <ColorSearch />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
