import React from "react";
import logo from "./logo.svg";
import Checkbox from "./Components/Checkbox";
import "./App.css";
import Application from "./Components/Application";
import Navbar from "./Components/NavBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="body">
          <div className="left">
            <h1>Portugal</h1>
            <ul>
              <li>
                <input
                  type="checkbox"
                  checked={this.state.checked}
                  onClick={this.handleClick}
                />
                <label> Aasalya Jayavanti</label>
              </li>
              <br />
              <li>
                <input
                  type="checkbox"
                  checked={this.state.checked}
                  onClick={this.handleClick}
                />
                <label> Luveen lawrence</label>
                <br />
              </li>
              <li>
                {" "}
                <input
                  type="checkbox"
                  checked={this.state.checked}
                  onClick={this.handleClick}
                />
                <label> Ray Melbourne</label>
                <br />
              </li>
              <li>
                <input
                  type="checkbox"
                  checked={this.state.checked}
                  onClick={this.handleClick}
                />
                <label> cayila Breser</label>
              </li>
            </ul>
            <h1>Nicaragua</h1>
            <ul>
              <li>
                <input
                  type="checkbox"
                  checked={this.state.checked}
                  onClick={this.handleClick}
                />
                <label> Devendas Nandi</label>
                <br />
              </li>
              <li>
                <input
                  type="checkbox"
                  checked={this.state.checked}
                  onClick={this.handleClick}
                />
                <label> Obasey Chidy</label>
                <br />
              </li>
              <li>
                <input
                  type="checkbox"
                  name="Xenie"
                  checked={this.state.checked}
                  onClick={this.handleClick}
                />
                <label> Xenie Dolezelovs</label>
                <br />
              </li>
              <li>
                <input
                  type="checkbox"
                  checked={this.state.checked}
                  onClick={this.handleClick}
                />
                <label> Ezequiel Dengra</label>
              </li>
            </ul>
            <h1>Marshall Islands</h1>

            <ul>
              <li>
                <input
                  type="checkbox"
                  id="aaron"
                  onChange={this.handleChange}
                />
                <label>Aaron Almaraz</label>
                <br />
              </li>
              <li>
                <input
                  type="checkbox"
                  name="jelena"
                  onChange={this.handleChange}
                />
                <label> Jelena Denisova</label>
              </li>
            </ul>
          </div>
          <div className="right">GCUHVBNK</div>
        </div>
      </div>
    );
  }
}

export default App;
