// ["8PM", "9PM", "10PM", "11PM", "12AM", "1AM", "2AM", "3AM", "4AM"]
export default (labels, data) => {
  return {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "sleep states",
          backgroundColor: "white",
          borderColor: "red",
          data,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: "Time",
            font: {
              size: 25,
            },
          },
          ticks: {
            font: {
              max: 5,
              min: 0,
              stepSize: 0.5,
              size: 25,
            },
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Sleepiness",
          font: {
            size: 25,
          },
        },
        ticks: {
          font: {
            max: 5,
            min: 0,
            stepSize: 0.5,
            size: 25,
          },
        },
      },
    },
  };
};
