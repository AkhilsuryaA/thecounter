import React from "react";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT, RESET } from "./actions";

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.props.dispatch({ type: INCREMENT });
  };

  decrement = () => {
    this.props.dispatch({ type: DECREMENT });
  };

  reset = () => {
    this.props.dispatch({ type: RESET });
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <div>
          <button onClick={this.reset}>reset</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Counter);
