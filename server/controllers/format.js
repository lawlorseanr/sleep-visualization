const { STAGE_MAP, TRIM_LENGTH, TIMEZONE } = require("../config/config");

module.exports = (req, res, next) => {
  let { intervals } = res.rawData;
  res.data = intervals.map((interval) => {
    const startTime = new Date(interval.ts).getTime();
    const initialObject = {
      data: [STAGE_MAP[interval.stages[0].stage]],
      time: [startTime],
    };

    return interval.stages.slice(1).reduce((accumulator, stage) => {
      let currentTime = accumulator.time[accumulator.time.length - 1];
      let currentStage = accumulator.data[accumulator.data.length - 1];
      let newTime = currentTime + stage.duration * 1000;

      // add last stage to current timestep
      accumulator.data.push(currentStage);
      accumulator.time.push(newTime);

      // add new stage to current timestep
      accumulator.data.push(STAGE_MAP[stage.stage]);
      accumulator.time.push(newTime);

      return accumulator;
    }, initialObject);
  });

  next();
};
