import React from "react";
import ThemeToggle from "../../Component/ThemeToggle";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-wrapper">
          <ThemeToggle />
          <div className="section-output">
            <p className="history">
              308 <span className="color-third">x</span> 42
            </p>
            <p className="output">12,936</p>
          </div>
          <div className="section-button">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
