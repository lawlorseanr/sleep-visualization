const { TIMEZONE } = require("../config/config");

const hr2ms = 1 * 60 * 60 * 1000;
const halfHr2ms = 0.5 * hr2ms;

module.exports = (req, res, next) => {
  for (let i = 0; i < res.data.length; i++) {
    const x = res.data[i].time;
    const y = res.data[i].data;

    const startDate = new Date(x[0]);
    const stopDate = new Date(x[x.length - 1]);

    const xLabelStart = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate(),
      startDate.getHours()
    ).getTime();

    const xLabelStop = new Date(
      stopDate.getFullYear(),
      stopDate.getMonth(),
      stopDate.getDate(),
      stopDate.getHours() + 1
    ).getTime();

    let xTick = {
      value: [],
      text: [],
    };

    let yTick = {
      value: [0, 1, 2, 3],
      text: ["deep", "light", "awake", "out"],
    };

    for (let t = xLabelStart; t <= xLabelStop; t += hr2ms) {
      xTick.value.push(t);
      xTick.text.push(new Date(t).getHours() + TIMEZONE);
    }

    res.data[i].xaxis = {
      range: [xTick.value[0], xTick.value[xTick.value.length - 1]],
      tickvals: xTick.value,
      ticktext: xTick.text,
      tickmode: "array",
    };

    res.data[i].yaxis = {
      tickvals: yTick.value,
      ticktext: yTick.text,
      tickmode: "array",
    };
  }

  next();
};
