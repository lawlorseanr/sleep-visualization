import React, { useState, useEffect } from "react";
import config from "../config/chart.js";
import Chart from "chart.js/auto";
import Server from "../lib/Server.js";

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
  const [userIndex, setUserIndex] = useState(null);

  useEffect(async () => {
    const response = await Server.get("/api/users");
    setUserList(response.data);
  }, []);

  useEffect(async () => {
    if (userList.length > 0) {
      const start_index = 0;
      setUserIndex(start_index);
      const response = await Server.get(
        `/api/data/user/${userList[start_index].id}`
      );
      userData[start_index] = response.data.intervals;
      setUserData(userData);
      // new Chart(document.getElementById("myChart"), config(label, data));
    }
  }, [userList]);

  return (
    <div id="app">
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default App;
