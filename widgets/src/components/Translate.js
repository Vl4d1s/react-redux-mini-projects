import React, { useState } from "react";
import Dropdown from "./Dropdown";

const option = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(option[0]);
  return (
    <div>
      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={option}
      />
    </div>
  );
};

export default Translate;
