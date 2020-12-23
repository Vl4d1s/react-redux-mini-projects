import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const seasonConfig = {
  winter: { text: "Burr, it is chilly!", icon: "snowflake" },
  summer: { text: "Let's hit the beach!", icon: "sun" },
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth);
  // When we use object destructuring, The name of the variables must
  // be the same as the names of the keys in the object.
  const { text, icon } = seasonConfig[season];
  console.log(icon);

  return (
    <div>
      <i className={`${icon} icon`}></i>
      <h1>{text}</h1>
      <i className={`${icon} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
