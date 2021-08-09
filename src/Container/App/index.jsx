import React from "react";
import Button from "../../Component/Button";
import Output from "../../Component/Output";
import ThemeToggle from "../../Component/ThemeToggle";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-wrapper">
          <ThemeToggle />
          <Output />
          <Button />
          <div className="line"></div>
        </div>
      </div>
    );
  }
}

export default App;
