import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    // First all the addEventListener get calls and then React EventListeners.
    // so this is the first addEventListener that called.
    document.body.addEventListener(
      "click",
      (event) => {
        if (ref.current && ref.current.contains(event.target)) {
          return;
        }
        setOpen(false);
      },
      // for react v17
      { capture: true }
    );
  }, []);

  const renderdOptions = options.map((option) => {
    if (option.value === selected.value) {
      // If user selected some opting don't show it twice.
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          // the Second addEventListener that will called.
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => {
            // the thired addEventListener that will called.
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderdOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
