import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "Who is Vladis?",
    content: "Vladis is forth year software engineer student.",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use react by creating components",
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
