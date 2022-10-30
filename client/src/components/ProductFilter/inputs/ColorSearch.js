import React, { useState, useEffect } from "react";
import { ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { remove } from "lodash";

export default function ColorSearch({ handleChange }) {
  const [colors, setColors] = useState([
    "Red",
    "Black",
    "Blue",
    "Green",
    "Yellow",
    "White",
    "Purple",
    "Orange",
    "Pink",
    "Brown",
    "Gray",
    "Silver",
    "Gold",
  ]);
  const [active, setActive] = useState([]);

  const removeColor = (color) => {
    const newActive = remove(active, (c) => c !== color);
    setActive(newActive);
  };

  const addColor = (color) => {
    const newActive = [...active, color];
    setActive(newActive);
  };



  useEffect(() => {
    console.log('active colors', active);
  }, [active]);
  function colorSwatch(color) {
    return (
      <Button
        id={`color-swatch-${color}`}
        style={{ backgroundColor: color}}
        key={color}
        value={color}
        active={active.includes(color)}
        onClick={(e) => {
          active?.includes(color) ? removeColor(color) : addColor(color);
          // setChecked(e.currentTarget.checked);
          // handleChange(e.currentTarget.value);
        }}
      />
    );
  }

  useEffect(() => {}, []);

  return <>{colors.map((color) => colorSwatch(color))}</>;
}
