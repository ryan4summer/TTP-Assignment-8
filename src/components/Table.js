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
    console.log(this.state.rows);
  };

  handleAddCol = () => {
    let newLength = this.state.columns.length;
    let temp = new Array(newLength);
    for (let i = 0; i < temp.length; i++) {
      temp[i] = this.state.rows;
      this.setState({ columns: [...temp, temp] });
    }
    console.log(temp);
  };

  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1),
    });
  };

  handleRemoveCol = () => {
    this.setState({
      columns: this.state.columns.slice(0, -1),
    });
  };

  handleDropdownChange = (e) => {
    this.setState({ selectedColor: e.target.value });
  };

  handleMouseDown = (e) => {
    e.target.style.backgroundColor = this.state.selectedColor;
    console.log("Mouse Down");
    this.setState({ isClicked: true });
  };

  handleMouseOver = (e) => {
    if (this.state.isClicked)
      e.target.style.backgroundColor = this.state.selectedColor;
    console.log("Mouse over");
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
    let displayRow = (
      <td
        className="td"
        style={dataStyle}
        onMouseDown={this.handleMouseDown}
        onMouseOverCapture={this.handleMouseOver}
        onMouseUp={this.handleMouseUp}
      ></td>
    );
    return (
      <div>
        <button onClick={this.handleAddRow}>Add Row</button>
        <button onClick={this.handleAddCol}>Add Column</button>
        <button onClick={this.handleRemoveRow}>Delete Row</button>
        <button onClick={this.handleRemoveCol}>Delete Column</button>
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
            {this.state.rows.map((item) => (
              <tr>
                {this.state.columns.map((item) => (
                  <>{displayRow}</>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const dataStyle = {
  border: "1px solid black",
  backgroundColor: "",
  height: "20px",
  width: "100px",
};

export default Table;
