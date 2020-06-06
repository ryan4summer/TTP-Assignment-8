import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      columns: [[]],
      selectedColor: null,
      isClicked: false,
    };
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleChange = (e) => {
    const rows = [...this.state.rows];
    this.setState({
      rows,
    });
  };

  handleAddRow = () => {
    const row = {
      row: "",
    };
    this.setState({
      rows: [...this.state.rows, row],
    });
  };

  handleAddCol = () => {
    let newLength = this.state.columns.length;
    let temp = new Array(newLength);
    for (let i = 0; i < temp.length; i++) {
      temp[i] = this.state.rows;
      this.setState({ columns: [...temp, temp] });
    }
  };

  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1),
    });
  };

  handleRemoveCol = () => {
    if (this.state.columns.length > 1) {
      this.setState({
        columns: this.state.columns.slice(0, -1),
      });
    }
  };

  handleDropdownChange = (e) => {
    this.setState({ selectedColor: e.target.value });
  };

  handleMouseDown = (e) => {
    e.target.style.backgroundColor = this.state.selectedColor;
    this.setState({ isClicked: true });
  };

  handleMouseOver = (e) => {
    if (this.state.isClicked)
      e.target.style.backgroundColor = this.state.selectedColor;
  };

  handleMouseUp = (e) => {
    this.setState({ isClicked: false });
  };

  handleAddColorsToUncolored = () => {
    let cells = document.getElementsByClassName("td");
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].style.backgroundColor === "")
        cells[i].style.backgroundColor = this.state.selectedColor;
    }
  };

  handleAddColorsToAll = () => {
    let cells = document.getElementsByClassName("td");
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = this.state.selectedColor;
    }
  };

  handleResetColor = () => {
    let cells = document.getElementsByClassName("td");
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = "";
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleAddRow}>Add Row</button>
        <button onClick={this.handleAddCol}>Add Column</button>
        <button onClick={this.handleRemoveRow}>Remove Row</button>
        <button onClick={this.handleRemoveCol}>Remove Column</button>
        <select
          id="dropdown"
          onChange={this.handleDropdownChange}
          value={this.state.selectedColor}
        >
          <option>Select Color</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="grey">Grey</option>
          <option value="yellow">Yellow</option>
        </select>
        <button onClick={this.handleAddColorsToUncolored}>
          Color All Uncolored Cells
        </button>
        <button onClick={this.handleAddColorsToAll}>Color All Cells</button>
        <button onClick={this.handleResetColor}>Reset Color Of Cells</button>

        <table>
          <tbody>
            <TableRow
              rows={this.state.rows}
              columns={this.state.columns}
              handleMouseDown={this.handleMouseDown}
              handleMouseOver={this.handleMouseOver}
              handleMouseUp={this.handleMouseUp}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
