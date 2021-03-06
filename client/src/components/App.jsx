import React, { useState, useEffect } from "react";
import Plotly from "plotly.js-dist-min";
import Server from "../lib/Server.js";
import IntervalSelect from "./IntervalSelect.jsx";

const App = () => {
  const [userData, setUserData] = useState({});
  const [userList, setUserList] = useState([]);
  const [userIndex, setUserIndex] = useState(null);
  const [intervalIndex, setIntervalIndex] = useState(0);

  useEffect(async () => {
    const response = await Server.get("/api/users");
    setUserList(response.data);

    // if userList.length > 0;
    if (response.data.length > 0) {
      setUserIndex(0);
    } else {
      console.error("No users returned.");
    }
  }, []);

  useEffect(async () => {
    if (!userList[userIndex]) {
      return;
    }

    const userId = userList[userIndex].id;
    if (userList[userIndex] && userData[userList[userIndex]] === undefined) {
      const response = await Server.get(`/api/data/user/${userId}`);
      userData[userId] = response.data;
      setUserData(userData);
    }

    let data = [
      {
        x: userData[userId][intervalIndex].time,
        y: userData[userId][intervalIndex].data,
        type: "line",
      },
    ];

    let layout = {
      xaxis: userData[userId][intervalIndex].xaxis,
      yaxis: userData[userId][intervalIndex].yaxis,
      width: 1000,
      height: 500,
      margin: {
        t: 10,
      },
    };

    Plotly.newPlot("myChart", data, layout, { displayModeBar: false });
  }, [userIndex, intervalIndex]);

  return (
    <div id="app">
      <h2>Sleep Data</h2>
      <div id="selector-div">
        {"User:  "}
        <select
          name="users"
          id="user-selector"
          onChange={(e) => {
            e.preventDefault();
            setUserIndex(e.target.selectedIndex);
            setIntervalIndex(0);
          }}
        >
          {userList.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
        {"   Interval:  "}
        <IntervalSelect
          setIntervalIndex={setIntervalIndex}
          userList={userList}
          userData={userData}
          userIndex={userIndex}
          intervalIndex={intervalIndex}
        />
      </div>
      <div id="myChart"></div>
    </div>
  );
};

export default App;
