import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notARobot: false,
      isACat: false
    };
  }

  handleCheckboxChange = e => {
    // Using es6 computed property name
    this.setState({
      [e.target.name]: e.target.checked
    });
  };

  render() {
    const { notARobot, isACat } = this.state;

    return (
      <div>
        <p>
          I am not a robot{" "}
          <input
            name="notARobot"
            type="checkbox"
            checked={notARobot}
            onChange={this.handleCheckboxChange}
          />
        </p>
        <p>
          I am a cat{" "}
          <input
            name="isACat"
            type="checkbox"
            checked={isACat}
            onChange={this.handleCheckboxChange}
          />
        </p>
        <p>{notARobot && isACat ? <button>proceed</button> : ""}</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
