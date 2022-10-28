import { TabulatorFull as Tabulator } from "tabulator-tables";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ImageSelect } from "../index.js";
import $ from "jquery";
import axios from "axios";

// import { variants } from '../helpers/popSidenav.js'

export default function VariantTable({ id, title, setVariants, setTable }) {
  const [thisTable, setThisTable] = useState(null);

  const getVariants = async () => {
    const { data } = await axios.get(`/variants/${id}`);
    console.log("setting thisTable data", data, thisTable);
    thisTable.setData(data);
    setVariants(data);
  };

  useEffect(() => {
    console.log("updating", id, thisTable);
    if (thisTable) getVariants();
    setTable(thisTable);
  }, [id, thisTable]);


  useEffect(() => {
    console.log("varTable mounted");
    let varTable = new Tabulator("#variant-table", {
      data: [],
      layout: "fitColumns",
      // selectable: true,
      selectableRangeMode: "click",
      printRowRange: "visible",
      printAsHtml: true,
      // reactiveData: true,
      responsiveLayout: "collapse",
      columnDefaults: {
        responsive: 0,
        editor: "input",
        editable: (cell) => {
          return cell.getRow().isSelected();
        },
        // editable: false,
        headerFilter: true,
      },
      columns: [
        {
          formatter: "rowSelection",
          titleFormatter: "rowSelection",
          titleFormatterParams: {
            rowRange: "active",
          },
          headerHozAlign: "center",
          hozAlign: "center",
          vertAlign: "middle",
          headerSort: false,
          maxWidth: 50,
          editable: false,
          headerFilter: false,
        },
        {
          formatter: "responsiveCollapse",
          title: "",
          headerSort: false,
          maxWidth: 50,
          hozAlign: "center",
          headerHozAlign: "center",
          editable: false,
        },
        {
          title: "Image",
          field: "image",
          maxWidth: 100,
          hozAlign: "center",
          headerFilter: false,
          editable: false,
          formatter: (cell) => {
            let src = cell.getValue();
            src = !!src
              ? src
              : "https://seeklogo.com/images/P/playmakers-logo-B694A97CB5-seeklogo.com.gif";
            return `<img src="${src}" style="width:75px;height:75px">`;
          },
          cellClick: (e, cell) => {
            //do something
          },
        },
        { title: "Variant ID", field: "id", responsive: 1, editable: false },
        { title: "Title", field: "title" },
        { title: "SKU", field: "sku" },
        {
          title: "Price",
          field: "price",
          maxWidth: 75,
          formatter: "money",
          formatterParams: {
            symbol: "$",
            precision: 2,
          },
          hozAlign: "center",
        },
        {
          title: "Compare At Price",
          field: "compare_at_price",
          maxWidth: 75,
          formatter: "money",
          hozAlign: "center",
        },
        { title: "Option 1", field: "option1" },
        { title: "Option 2", field: "option2" },
        { title: "Option 3", field: "option3", responsive: 2 },
        {
          title: "UPC",
          field: "barcode",
          hozAlign: "center",
          headerHozAlign: "center",
        },
        {
          title: "Inv.",
          field: "inventory_quantity",
          maxWidth: 100,
          editable: false,
          hozAlign: "center",
          headerHozAlign: "center",
        },
        { title: "Tax Code", field: "tax_code" },
      ],
    });

    varTable.on("rowContext", (e, row) => {
      e.preventDefault();
      if (row.isSelected()) row.deselect();
      else row.select();
    });
    varTable.on("cellEdited", (cell) => {
      let val = cell.getValue();
      let col = cell.getColumn().getField();
      let rows = varTable.getSelectedRows();
      rows.forEach((row) => {
        row.getCell(col).setValue(val);
      });
      $("#submit-var-changes").removeClass("opacity-0").prop("disabled", false);
      $("#cancel-var-changes").removeClass("opacity-0").prop("disabled", false);
    });

    varTable.on("tableBuilt", () => {
      $("#print-var-table").on("click", () => {
        varTable.print(false, true);
      });
      $("#download-var-table").on("click", () => {
        varTable.download("xlsx", `${id}-${title}.xlsx`);
      });
      setThisTable(varTable);
    });
  }, []);
  return (
    <Container fluid className="d-flex justify-content-center flex-column">
      <Row className="justify-content-start">
        <Col>
          <Button hidden id="print-var-table" className="btn btn-success m-2">
            <i className="bi bi-printer-fill"></i>
          </Button>
          <Button className="btn btn-success m-4" id="download-var-table">
            <i className="bi bi-download"></i>
          </Button>
          <ImageSelect />
        </Col>
      </Row>
      <div
        id="variant-table"
        className="striped compact myTable"
        // ref={(tabulator) => (this.tabulator = tabulator)}
        ref={(tabulator) => tabulator}
      />
    </Container>
  );
}
