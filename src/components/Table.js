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

  // add a row 
  handleAddRow = () => {
    const row = {
      row: "",
    };
    this.setState({
      rows: [...this.state.rows, row],
    });
  };

  // add a column
  handleAddCol = () => {
    let newLength = this.state.columns.length;
    let temp = new Array(newLength);
    for (let i = 0; i < temp.length; i++) {
      temp[i] = this.state.rows;
      this.setState({ columns: [...temp, temp] });
    }
  };

  // remove a row
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1),
    });
  };

  // remove a column
  handleRemoveCol = () => {
    if (this.state.columns.length > 1) {
      this.setState({
        columns: this.state.columns.slice(0, -1),
      });
    }
  };

  // change color from the drop down menu
  handleDropdownChange = (e) => {
    this.setState({ selectedColor: e.target.value });
  };

  // when the left click the gird change the color to selected color
  handleMouseDown = (e) => {
    e.target.style.backgroundColor = this.state.selectedColor;
    this.setState({ isClicked: true });
  };

  // when mouse move over the gird and the the left clikc is held, change the color to the selected color
  handleMouseOver = (e) => {
    if (this.state.isClicked)
      e.target.style.backgroundColor = this.state.selectedColor;
  };

  // When the left click is released, the isClicked become false and will not change color after that
  handleMouseUp = (e) => {
    this.setState({ isClicked: false });
  };

  // change all the blank grid to the selected color 
  handleAddColorsToUncolored = () => {
    let cells = document.getElementsByClassName("td");
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].style.backgroundColor === "")
        cells[i].style.backgroundColor = this.state.selectedColor;
    }
  };

  // Change all the color to the selected color
  handleAddColorsToAll = () => {
    let cells = document.getElementsByClassName("td");
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = this.state.selectedColor;
    }
  };

  // Reset the color to the colored grids to blank color
  handleResetColor = () => {
    let cells = document.getElementsByClassName("td");
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = "";
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleAddRow} style={buttonStyle}>
          Add Row
        </button>
        <button onClick={this.handleAddCol} style={buttonStyle}>
          Add Column
        </button>
        <button onClick={this.handleRemoveRow} style={buttonStyle}>
          Remove Row
        </button>
        <button onClick={this.handleRemoveCol} style={buttonStyle}>
          Remove Column
        </button>
        <br />
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
        <button onClick={this.handleAddColorsToUncolored} style={colorStyle}>
          Color All Uncolored Cells
        </button>
        <button onClick={this.handleAddColorsToAll} style={colorStyle}>
          Color All Cells
        </button>
        <button onClick={this.handleResetColor} style={colorStyle}>
          Reset Color Of Cells
        </button>

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

const buttonStyle = {
  marginTop: "20px",
};

const colorStyle = {
  marginBottom: "20px",
};

export default Table;
