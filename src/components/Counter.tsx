import { useState } from "react";
import styles from "./Counter.module.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const onDecrement = () => {
    setCount((prevState) => {
      if (prevState === 0) return prevState;

      return prevState - 1;
    });
  };

  return (
    <div>
      <div>
        <span>
          <b>Count:</b> {count}
        </span>
      </div>
      <div className={styles.btns}>
        <button
          className="btn btn-primary btn-sm"
          type="button"
          onClick={onDecrement}
        >
          -
        </button>
        <button
          className="btn btn-primary btn-sm"
          type="button"
          onClick={onIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};
