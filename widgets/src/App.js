import React, { useState } from "react";
//import Accordion from "./components/Accordion";
//import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

// const items = [
//   {
//     title: "Who is Vladis?",
//     content: "Vladis is forth year software engineer student.",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorite JS library among engineers.",
//   },
//   {
//     title: "How do you use React?",
//     content: "You use react by creating components",
//   },
// ];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setShowDropDown(!showDropDown);
        }}
      >
        Toggle Dropdown
      </button>
      {showDropDown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  );
};

export default App;
