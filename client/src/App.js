import React, { useEffect } from "react";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_site.min.css";
import { Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap";

function ProductTable() {
  useEffect(() => {
    const table = new Tabulator("#product-table", {
      data: [
        {
          image: "/assets/images/send-help.png",
          name: "Send Help",
          description: "Send Help",
          category: "Funny Shirts",
          price: 100,
          vendor: "weBoot",
        },
      ],
      layout: "fitColumns",
      placeholder: "Nothing to see here...",
      height: "100%",
      columns: [
        {
          title: "Image",
          field: "image",
          formatter: (cell) => {
            return `<img style="width:75px;height:75px" src="${cell.getValue()}"/>`;
          },
          maxWidth: 100,
        },
        { title: "Name", field: "name" },
        { title: "Description", field: "description" },
        { title: "Category", field: "category" },
        { title: "Vendor", field: "vendor" },
        { title: "Price", field: "price" },
      ],
    });
    table.on("tableBuilt", function () {
      console.log("table built");
    });
  }, []);

  return (
    <Container fluid>
      <Row>
        <div
          id="product-table"
          className="striped compact"
          ref={(tabulator) => tabulator}
        />
      </Row>
    </Container>
  );
}

export default ProductTable;
