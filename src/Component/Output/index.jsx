import React from "react";
import "./Output.scss";

class Output extends React.Component {
  render() {
    return (
      <div className="output-wrapper">
        <div className="history">
          <p>
            120 <span>+</span> 692
          </p>
          <p>
            308 <span>x</span> 42
          </p>
        </div>
        <p className="output">12,936</p>
      </div>
    );
  }
}

export default Output;
