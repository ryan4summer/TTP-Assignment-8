import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      selectedColor: null,
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

  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1),
    });
  };

  handleDropdownChange = (e) => {
    this.setState({ selectedColor: e.target.value });
  };

  handleOnClick = () => {
    alert("On click works, so just add the color");
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
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <button onClick={this.handleAddRow} className="btn btn-default">
                Add Row
              </button>
              <button
                onClick={this.handleRemoveRow}
                className="btn btn-default"
              >
                Delete Row
              </button>
              <select id="dropdown" onChange={this.handleDropdownChange}>
                <option>Select Color</option>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="grey">Grey</option>
                <option value="yellow">Yellow</option>
              </select>
              <button
                onClick={this.handleAddColorsToUncolored}
                className="btn btn-default"
              >
                Color All Uncolored Cells
              </button>
              <button
                onClick={this.handleAddColorsToAll}
                className="btn btn-default"
              >
                Color All Cells
              </button>
              <button
                onClick={this.handleResetColor}
                className="btn btn-default"
              >
                Reset Color Of Cells
              </button>

              <table>
                <tbody>
                  {this.state.rows.map((item) => (
                    <tr>
                      <td
                        className="td"
                        style={dataStyle}
                        onClick={this.handleOnClick}
                      ></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
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

export default App;
