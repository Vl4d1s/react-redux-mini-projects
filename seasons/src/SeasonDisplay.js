import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth);
  const test =
    season === "winter" ? "Burr, it is chilly" : "Lets hit the beach!";
  return (
    <div>
      <h1>{test}</h1>
    </div>
  );
};

export default SeasonDisplay;
