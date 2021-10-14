import React, { useState, useEffect } from "react";
import config from "./chart.js";
import Chart from "chart.js/auto";

const label = [
  "8PM",
  "9PM",
  "10PM",
  "11PM",
  "12AM",
  "1AM",
  "2AM",
  "3AM",
  "4AM",
];
const data = [0, 10, 5, null, null, 30, 45, 30, 20];

const App = () => {
  const [userData, setUserData] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    new Chart(document.getElementById("myChart"), config(label, data));
  }, []);

  return (
    <div id="app">
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default App;
