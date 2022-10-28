import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { matchSorter } from "match-sorter";
import { Tabulator } from "tabulator-tables";
import { MultiDownshift, vendors } from "./index.js";
import { TbLeaf } from "react-icons/tb/index.esm.js";
import './style.css'

export default function VendorsInput({}) {
  const [allItems, setAllItems] = useState();
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  //Mount
  useEffect(() => {
    const allVendors = vendors.sort((a, b) => a - b);
    console.log("allVendors", allVendors);
    setAllItems(allVendors);
    setItems(allVendors);
    const prevVendors = JSON.parse(
      localStorage.getItem("selectedVendors")
    )?.split(",");
    console.log("prevVendors", prevVendors);

      setSelectedItems(prevVendors || ['10 Seconds']);
  }, []);

  const handleStateChange = (changes, downshiftState) => {
    if (changes.hasOwnProperty("selectedItem")) {
      console.log("changes selected item", changes.selectedItem);
      setSelectedItems([...selectedItems, changes.selectedItem]);
    } else if (changes.hasOwnProperty("inputValue")) {
      setItems(getItems(changes.inputValue));
    }
  };

  const getItems = (value) => {
    return value ? matchSorter(allItems, value) : allItems;
  };

  const onItemAdd = (selectedItem) => {
    setSelectedItems([...selectedItems, selectedItem]);
  };

  useEffect(() => {
    console.log("selectedItems changed", selectedItems);
    if (!selectedItems.length) {
      localStorage.removeItem("selectedVendors");
      return
    }
    const vendors = selectedItems.join(",");
    localStorage.setItem("selectedVendors", JSON.stringify(vendors));
    const table = Tabulator.findTable("#table")[0];
    const url = `/products?vendors=${vendors}`;
    table.setData(url)
  }, [selectedItems]);

  const onRemoveItem = (item) => {
    const copy = [...selectedItems];
    copy.splice(item.index, 1);
    console.log('copy', copy)
    setSelectedItems(copy);
    const table = Tabulator.findTable("#table")[0];
    const url = `/products?vendors=${copy.join(",")}`;
    table.setData(url).then(() => {
      let numRows = table.getRows().length;
      const max = table.getPageSize();
      console.log("max", max);
      console.log({ numRows });
      numRows = numRows >= max ? max : numRows;
      const height = numRows * 40 + 100;
      console.log("height", height);
      table.setHeight(height);
    });
  };

  const onItemChanged = (item) => {
    const copy = [...selectedItems];
    copy.splice(item.index, 1, item.value);
    setSelectedItems(copy);
  };

  const itemToString = (i) => {
    return i ? i.name : "";
  };

  return (
    <MultiDownshift
      selectedItems={selectedItems}
      onChangedState={handleStateChange}
      onChange={onItemAdd}
      onItemChanged={onItemChanged}
      onRemoveItem={onRemoveItem}
      items={items}
      itemToString={itemToString}
    />
  );
}
