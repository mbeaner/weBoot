import React, { useEffect, useState } from "react";

import { TabulatorFull as Tabulator } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator_bootstrap5.min.css";
import { Container, Row } from "react-bootstrap";
import {
  ProductCard,
  ProductFilter,
  ProductSidenav,
} from "./components/index.js";

import "./App.css";
import "bootstrap";

function ProductTable() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/assets/images/send-help.png",
      name: "Send Help",
      description: "Send Help",
      category: "Funny Shirts",
      price: 25,
      vendor: "weBoot",
      variants: [
        { id: 1, size: "S", color: "Black", inventory: 10 },
        { id: 2, size: "M", color: "Black", inventory: 15 },
        { id: 3, size: "L", color: "Black", inventory: 12 },
        { id: 4, size: "XL", color: "Black", inventory: 7 },
      ],
    },
    {
      id: 2,
      image: "/assets/images/mim-hat.png",
      name: "Mim Hat",
      description: "Imitation is the sincerest form of flattery",
      category: "Awesome Hats",
      price: 100,
      vendor: "weBoot",
      variants: [{ id: 1, size: "OSFM", color: "Brown/Red", Inventory: 100 }],
    },
  ]);
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

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
          title: "weBoot",
          field: "weboot",
          visible: true,
          headerHozAlign: "center",
          headerSort: false,
          titleFormatter: function (column) {
            return `<img src="/assets/images/weboot-logo3.png" height: 100px;"/>`;
          },
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
        {
          title: "Reviews",
          field: "reviews",
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
    table.on("rowClick", function (e, row) {
      console.log("row click");
      setProduct(row.getData());
      setShow(true);
      setLoading(true)
    });
  }, [products]);

  return (
    <>
      <ProductSidenav
        props = {{product, show, setShow, loading, setLoading}}
      />
      <Container>
        <Row>
          <div id="product-table" className="compact" />
        </Row>
      </Container>
    </>
  );
}

export default ProductTable;
