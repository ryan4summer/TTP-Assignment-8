import React, { Component } from "react";
import TableCell from "./TableCell";

class TableRow extends Component {
  render() {
    return this.props.rows.map(() => (
      <tr>
        <TableCell
          columns={this.props.columns}
          handleMouseDown={this.props.handleMouseDown}
          handleMouseOver={this.props.handleMouseOver}
          handleMouseUp={this.props.handleMouseUp}
        />
      </tr>
    ));
  }
}

export default TableRow;
