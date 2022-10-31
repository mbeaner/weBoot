import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import {
  PriceSearch,
  ColorSearch,
  TextSearch,
  CategoriesInput,
  RatingSearch,
  TagsInput,
  SizeSearch,
} from "./inputs/index.js";
import { BiCategoryAlt } from "react-icons/bi/index.esm.js";
import {BsRulers} from "react-icons/bs/index.esm.js";

export default function CustProductFilter() {
  // const [filter, setFilter] = useState(null);
  // const [update, setUpdate] = useState(null);

  return (
    <>
      <h1>Filters</h1>
      <TextSearch />
      <Accordion id="filter-accordian" defaultActiveKey="0">
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
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h5>
              <BiCategoryAlt color="blue" /> Category
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <CategoriesInput />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5>⭐ Rating</h5>
          </Accordion.Header>
          <Accordion.Body>
            <RatingSearch />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5>🏷️ Tags</h5>
          </Accordion.Header>
          <Accordion.Body>
            <TagsInput />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h5><BsRulers id='size-ruler'/> Sizes</h5>
          </Accordion.Header>
          <Accordion.Body>
            <SizeSearch />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
