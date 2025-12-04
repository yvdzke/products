import React from "react";
import Button from "../Elements/Button/Button";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }

  componentDidMount() {
    this.setState({ count: 1 });
    console.log("ComponentDidMount");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
    if (this.state.count === 10) {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <div className="items-center flex">
        <h1 className="mr-5 text-black p-3 rounded-md border border-black bg-white">
          {this.state.count}
        </h1>
        <Button
          onClick={() => this.setState({ count: this.state.count + 1 })}
          varian="p-3 bg-black rounded-md text-white"
        >
          +
        </Button>
        {console.log("render")}
      </div>
    );
  }
}

export default Counter;
