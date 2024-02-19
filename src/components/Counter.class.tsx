import { Component, ReactNode } from "react";

interface CounterProps {
  initialCount?: number;
}

interface CounterState {
  count: number;
}

export class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: this.props.initialCount || 0,
  };

  onIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render(): ReactNode {
    return (
      <div>
        <div>
          <span>
            <b>Count:</b> {this.state.count}
          </span>
        </div>
        <div className="d-flex align-items-center gap-2 mt-1">
          <button
            className="btn btn-primary btn-sm"
            type="button"
            onClick={this.onDecrement}
          >
            -
          </button>
          <button
            className="btn btn-primary btn-sm"
            type="button"
            onClick={this.onIncrement}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
