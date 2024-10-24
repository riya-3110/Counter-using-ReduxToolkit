import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/counter.js";
import { privacyAction } from "../store/privacy.js";

export const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterAction.increment());
  };

  const handleDecrement = () => {
    dispatch(counterAction.decrement());
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyAction.toggle());
  };

  const handleAdd = () => {
    dispatch(
      counterAction.add({
        num: inputElement.current.value,
      })
    );
    inputElement.current.value = "";
  };

  const handleSub = () => {
    dispatch(
      counterAction.sub({
        num: inputElement.current.value,
      })
    );
    inputElement.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleIncrement}
        >
          + 1
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={handleDecrement}
        >
          - 1
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputElement}
        />

        <button type="button" className="btn btn-danger" onClick={handleAdd}>
          Add
        </button>
        <button type="button" className="btn btn-success" onClick={handleSub}>
          Subtract
        </button>
      </div>
    </>
  );
};
