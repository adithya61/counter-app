import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  // state: stores important values of the component.
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  // Event Handler: use arrow function for handling event handlers as it inherits context from parent
  // and hence count variable is accessible.
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        {/* dynamically rendering className */}
        <span className={this.getBadgeColor()}>{this.formatCount()}</span>

        <button onClick={this.handleIncrement} className="btn btn-secondary">
          Increment
        </button>
      </div>
    );
  }

  // get badge color corresponding to the count property in state object
  getBadgeColor() {
    let badgeColor = "badge m-2 bg-";
    badgeColor += this.state.count == 0 ? "warning" : "primary";
    return badgeColor;
  }

  //  display string literal zero or the count based on the object state in the component.
  formatCount() {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
