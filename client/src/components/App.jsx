import React, { useState, useEffect } from "react";
import Plotly from "plotly.js-dist-min";
import Server from "../lib/Server.js";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [userList, setUserList] = useState([]);
  const [userIndex, setUserIndex] = useState(null);
  const [intervalIndex, setIntervalIndex] = useState(null);

  useEffect(async () => {
    const response = await Server.get("/api/users");
    setUserList(response.data);
  }, []);

  useEffect(async () => {
    if (userList.length > 0) {
      const start_index = 0;
      const response = await Server.get(
        `/api/data/user/${userList[start_index].id}`
      );
      userData[start_index] = response.data;
      setUserIndex(start_index);
      setUserData(userData);

      const x = userData[start_index][0].time;
      const y = userData[start_index][0].data;

      let data = [
        {
          x,
          y,
          type: "line",
        },
      ];

      Plotly.newPlot(
        "myChart",
        data,
        { width: 1000, height: 500, margin: { t: 10 } },
        { displayModeBar: false }
      );
    }
  }, [userList]);

  return (
    <div id="app">
      <div id="myChart"></div>
    </div>
  );
};

export default App;
