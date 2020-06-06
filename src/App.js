import React, { Component } from "react";
//import domchallenge from "./components/domchallenge.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      columns: [[]],
      selectedColor: null,
      isClicked: true,
    };
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleChange = (e) => {
    // const rows = [...this.state.rows];
    // this.setState({
    //   rows,
    // });
  };

  handleAddRow = () => {
    const row = {
      row: "",
    };
    this.setState({
      rows: [...this.state.rows, row],
    });
    console.log(this.state.rows)
  };

  handleAddCol = () => {
    let newLength = this.state.columns.length;
    let temp = new Array(newLength);
    for (let i = 0; i < temp.length; i ++){
      temp[i] = this.state.rows;
      this.setState({columns:[...temp,temp]})
    }
    console.log(temp)
  }

  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1),
    });
  };

  handleDropdownChange = (e) => {
    this.setState({ selectedColor: e.target.value });
  };

  handleOnClick = (e) => {
    console.log("clicked");
        e.target.style.backgroundColor = this.state.selectedColor;
  };

  handleButtonClick = (e) => {
    let action = e.target.value;
    if(action === "column")  {
      this.setState((state) => ({
        columns: state.columns,
      }));
    }
  }

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
        onClick={this.handleOnClick}
      ></td>
    )
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <button onClick={this.handleAddRow} className="btn btn-default" value = "add-row"> 
                Add Row
              </button>
              <button onClick={this.handleAddCol} className="btn btn-default">
                Add Column
              </button>
              
              <button
                onClick={this.handleRemoveRow}
                className="btn btn-default"
              >
                Delete Row
              </button>
              <select id="dropdown" onChange={this.handleDropdownChange} value={this.state.selectedColor}>
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
                    <tr>{this.state.columns.map((item)=>(<>{displayRow}</>))}</tr>
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
