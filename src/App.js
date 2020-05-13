import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import marked from "marked";
import Editor from "./components/Editor";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "./components/Editor.css";
import "./components/Header.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
  }

  enableTheme = (name) => {
    this.setState({
      theme: name,
    });
  };
  render() {
    return (
      <>
        <Header theme={this.state.theme} enableTheme={this.enableTheme} />
        <Editor theme={this.state.theme} />
      </>
    );
  }
}

export default App;
