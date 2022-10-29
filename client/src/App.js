import React, { useEffect } from "react";

import { TabulatorFull as Tabulator } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_bootstrap5.min.css";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./components/ProductCard.js";
import "./App.css";
import "bootstrap";

function ProductTable() {
  const [products, setProducts] = React.useState([
    {
      id: 1,
      image: "/assets/images/send-help.png",
      name: "Send Help",
      description: "Send Help",
      category: "Funny Shirts",
      price: 25,
      vendor: "weBoot",
    },
    {
      id: 2,
      image: "/assets/images/mim-hat.png",
      name: "Mim Hat",
      description: "Imitation is the sincerest form of flattery",
      category: "Awesome Hats",
      price: 100,
      vendor: "weBoot",
    },
  ]);

  useEffect(() => {
    const table = new Tabulator("#product-table", {
      data: products,
      layout: "fitColumns",
      placeholder: "Nothing to see here...",
      height: "100%",
      columnDefaults: {
        visible: false,
      },
      columns: [
        {
          title: "weBoot", field: "weboot", visible: true,
          headerHozAlign: "center",

          headerSort: false,
          titleFormatter: function (column) {
            return `<img src="/assets/images/weboot-logo3.png" height: 100px;"/>`;
          }
        },
        {
          title: "Image",
          field: "image",
          formatter: (cell) => {
            return `<img style="width:75px;height:75px" src="${cell.getValue()}"/>`;
          },
          maxWidth: 100,
        },
        {
          title: "Name",
          field: "name",
        },
        {
          title: "Description",
          field: "description",
        },
        {
          title: "Category",
          field: "category",
        },
        {
          title: "Vendor",
          field: "vendor",
        },
        {
          title: "Price",
          field: "price",
        },
        {
          title: "Product",
          field: "product",
        },
      ],
      rowFormatter: (row) => {
        const data = row.getData();
        
        if (!data) return;
        const element = row.getElement();
        while (element.firstChild) element.removeChild(element.firstChild);
        const card = ProductCard(data);
        element.innerHTML = card;
      },
    });
    table.on("tableBuilt", function () {
      console.log("table built");
    });
  }, [products]);

  return (
    <Container>
      <Row>
        <div
          id="product-table"
          className="compact"
          ref={(tabulator) => tabulator}
        />
      </Row>
    </Container>
  );
}

export default ProductTable;
