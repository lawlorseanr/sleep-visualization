import React, { useState, useEffect } from "react";
import Plotly from "plotly.js-dist-min";
import Server from "../lib/Server.js";

const TIMEZONE = 8;

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
      const start_interval = 0;

      const response = await Server.get(
        `/api/data/user/${userList[start_index].id}`
      );

      console.log(response.data);

      userData[start_index] = response.data;
      setUserIndex(start_index);
      setUserData(userData);

      let data = [
        {
          x: response.data[start_interval].time,
          y: response.data[start_interval].data,
          type: "line",
        },
      ];

      let layout = {
        xaxis: response.data[start_interval].xaxis,
        yaxis: response.data[start_interval].yaxis,
        width: 1000,
        height: 500,
        margin: {
          t: 10,
        },
      };

      Plotly.newPlot("myChart", data, layout, { displayModeBar: false });
    }
  }, [userList]);

  return (
    <div id="app">
      <div id="myChart"></div>
    </div>
  );
};

export default App;
