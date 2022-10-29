import React, { useState, useEffect } from "react";
import "./style.css";
import { Badge, CloseButton } from "react-bootstrap";
export default function BadgeValue({ tag, onRemove }) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: props.tag.value,
  //   };
  // }
  const [value, setValue] = useState(tag.value);

  // componentDidUpdate(nextProps) {
  //   if (nextProps.tag !== this.props.tag) {
  //     this.setState({ value: nextProps.tag.value });
  //   }
  // }
  useEffect(() => {
    setValue(tag.value);
  }, [tag]);

  const removeBadge = (e) => {
    // const { onRemove, tag } = this.props;
    e.preventDefault();
    e.stopPropagation();
    if (onRemove) {
      onRemove({ ...tag, value });
    }
  };

  // const inputRef = (c) => {
  //   input = c;
  // };

  return (
    <Badge style={{fontSize: "1.1em"} } className="vendor-badge m-1" bg="" pill>
      {value} <CloseButton className="vendor-delete" onClick={removeBadge} />
    </Badge>
  );
}
