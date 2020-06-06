import React, { Component } from "react";

class TableCell extends Component {
  render() {
    let displayRow = (
      <td
        className="td"
        style={dataStyle}
        onMouseDown={this.props.handleMouseDown}
        onMouseOver={this.props.handleMouseOver}
        onMouseUp={this.props.handleMouseUp}
      ></td>
    );

    return this.props.columns.map(() => <>{displayRow}</>);
  }
}

const dataStyle = {
  border: "1px solid black",
  backgroundColor: "",
  height: "20px",
  width: "100px",
};

export default TableCell;
