import { AdvancedFilter, ProductFilter } from "../index.js";
import { Offcanvas, Row, Col } from "react-bootstrap";
import {
  BsFilterCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs/index.esm.js";
import { FaWindowClose } from "react-icons/fa/index.esm.js";
import {
  TbArrowBigLeftLines,
  TbArrowBigRightLines,
} from "react-icons/tb/index.esm.js";
import React, { useState, useEffect } from "react";
// import { setAdvFilters } from "../AdvancedFilter/index.js";
// import { Tabulator } from "tabulator-tables";
import $ from "jquery";
import "./style.css";
// import setHeight from "../../helpers/setHeight.js";
// import { pick } from "lodash";

export default function FilterSidenav({}) {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    console.log("show changed", show);
    setHover(false);
  }, [show]);

  useEffect(() => {
    console.log("filter-sidenav mounted");

  }, []);

  function ShowFilters() {
    return (
      <>
        <BsFilterCircleFill
          id="show-filters"
          className={`show-filters ${
            !hover ? "opacity-100 pe-auto" : "opacity-0 pe-none"
          }`}
          onClick={() => {
            setShow(!show);
          }}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        />
        <BsFillArrowRightCircleFill
          className={`show-filters ${
            hover ? "opacity-100 pe-auto" : "opacity-0 pe-none"
          }`}
          id="show-filters"
          onClick={() => {
            setShow(!show);
          }}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        />
      </>
    );
  }

  return (
    <>
      <ShowFilters />
      <Offcanvas
        id="filter-sidenav"
        show={show}
        placement="end"
        scroll={true}
        backdrop={true}
        onHide={() => {
          setShow(false);
        }}
      >
        <Offcanvas.Header className="justify-content-between">
          {/* <Offcanvas.Title>
            <h2>Filters</h2>
          </Offcanvas.Title> */}
          <FaWindowClose id="close-filters" onClick={() => setShow(false)} />
          <div>
            <TbArrowBigLeftLines
              className="resize"
              onClick={() => {
                const currentWidth = $("#filter-sidenav").width();
                $("#filter-sidenav").width(currentWidth + 300);
              }}
            />
            <TbArrowBigRightLines
              className="resize"
              onClick={() => {
                const currentWidth = $("#filter-sidenav").width();
                $("#filter-sidenav").width(currentWidth - 300);
              }}
            />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
            <ProductFilter />
            <AdvancedFilter />
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
