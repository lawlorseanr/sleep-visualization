const { STAGE_MAP, TRIM_LENGTH } = require("../config/config");

module.exports = (req, res, next) => {
  let { intervals } = res.rawData;
  res.data = intervals.map((interval) => {
    const startTime = new Date(interval.ts).getTime();
    const initialObject = {
      data: [STAGE_MAP[interval.stages[0].stage]],
      time: [startTime],
      labels: [new Date(startTime)],
    };

    return interval.stages.slice(1).reduce((accumulator, stage) => {
      let currentTime = accumulator.time[accumulator.time.length - 1];
      let currentStage = accumulator.data[accumulator.data.length - 1];
      let newTime = currentTime + stage.duration * 1000;
      let newHour = new Date(newTime);

      // add last stage to current timestep
      accumulator.data.push(currentStage);
      accumulator.time.push(newTime);
      accumulator.labels.push(newHour);

      // add new stage to current timestep
      accumulator.data.push(STAGE_MAP[stage.stage]);
      accumulator.time.push(newTime);
      accumulator.labels.push(newHour);

      return accumulator;
    }, initialObject);
  });

  console.log(res.data);
  next();
};
