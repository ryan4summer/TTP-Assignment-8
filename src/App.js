import React, { Component } from "react";
import Header from "./components/layout/Header";
import Table from "./components/Table";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Table />
        </div>
      </div>
    );
  }
}

export default App;
