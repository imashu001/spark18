import React from "react";
import "./App.css";
import Navbar from "./Components/NavBar";
import Right from "./Components/Right";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      items: [],
    };
  }
  handleClick = (e) => {
    console.log(e.target.value);
    this.setState({
      checked: !this.state.checked,
      items:
        e.target.checked === true
          ? [...this.state.items, e.target.value]
          : [...this.state.items],
    });
    console.log(this.state.items);
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
                  value="Aasalya Jayavanti"
                  onClick={(e) => this.handleClick(e)}
                />
                <label> Aasalya Jayavanti</label>
              </li>
              <br />
              <li>
                <input
                  type="checkbox"
                  value="Luveen lawrence"
                  onClick={this.handleClick}
                />
                <label> Luveen lawrence</label>
                <br />
              </li>
              <li>
                {" "}
                <input
                  type="checkbox"
                  value="Ray Melbourne"
                  onClick={this.handleClick}
                />
                <label> Ray Melbourne</label>
                <br />
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Cayila Breser"
                  onClick={this.handleClick}
                />
                <label> Cayila Breser</label>
              </li>
            </ul>
            <h1>Nicaragua</h1>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value="Devendas Nandi"
                  onClick={this.handleClick}
                />
                <label> Devendas Nandi</label>
                <br />
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Obasey Chidi"
                  onClick={this.handleClick}
                />
                <label> Obasey Chidy</label>
                <br />
              </li>
              <li>
                <input
                  type="checkbox"
                  value=" Xenie Dolezelovs"
                  name="Xenie"
                  onClick={this.handleClick}
                />
                <label> Xenie Dolezelovs</label>
                <br />
              </li>
              <li>
                <input
                  type="checkbox"
                  value=" Ezequiel Dengra"
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
                  value=" AAron Almaraj"
                  onChange={this.handleClick}
                />
                <label>Aaron Almaraz</label>
                <br />
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Jelena Denisova"
                  onChange={this.handleClick}
                />
                <label> Jelena Denisova</label>
              </li>
            </ul>
          </div>
          <div className="right">
            <Right state={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
