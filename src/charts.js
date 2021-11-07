const weeklyWater = document.getElementById('weeklyWater').getContext('2d');
const weeklySleepQuality = document.getElementById('weeklySleepQuality').getContext('2d');
const weeklySleepHours = document.getElementById('weeklySleepHours').getContext('2d');
const weeklyStepsGraph = document.getElementById('weeklyStepsGraph').getContext('2d');
const weeklyStairsClimbedGraph = document.getElementById('weeklyStairsClimbedGraph').getContext('2d');
const weeklyActiveMinsGraph= document.getElementById('weeklyActiveMinsGraph').getContext('2d');

const charts = {
renderWeeklyWater(weeklyWaterConsumption){
  const weeklyWaterArray = weeklyWaterConsumption;
  const myWeeklyWaterChart = new Chart(weeklyWater, {
    type: 'bar',
    data: {
      labels: [weeklyWaterArray[0].date, weeklyWaterArray[1].date, weeklyWaterArray[2].date, weeklyWaterArray[3].date, weeklyWaterArray[4].date, weeklyWaterArray[5].date, weeklyWaterArray[6].date],
      datasets: [{
        label: 'Ounces',
        data: [weeklyWaterArray[0].numOunces, weeklyWaterArray[1].numOunces, weeklyWaterArray[2].numOunces,
        weeklyWaterArray[3].numOunces,
        weeklyWaterArray[4].numOunces, weeklyWaterArray[5].numOunces, weeklyWaterArray[6].numOunces],
        backgroundColor: 'rgba(160, 193, 233, 0.65)',
      }],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Water Consumed this Week',
          fontSize: 90,
        },
      }
    }
  })
},

renderWeeklySleepHours(weeklySleep) {
  const weeklySleepArray = weeklySleep;
  const myWeeklySleepChart = new Chart(weeklySleepHours, {
    type: 'bar',
    data: {
      labels: [weeklySleepArray[0].date, weeklySleepArray[1].date, weeklySleepArray[2].date, weeklySleepArray[3].date, weeklySleepArray[4].date, weeklySleepArray[5].date, weeklySleepArray[6].date],
      datasets: [{
        label: 'Hours',
        data: [weeklySleepArray[0].hoursSlept, weeklySleepArray[1].hoursSlept, weeklySleepArray[2].hoursSlept,
        weeklySleepArray[3].hoursSlept,
        weeklySleepArray[4].hoursSlept, weeklySleepArray[5].hoursSlept, weeklySleepArray[6].hoursSlept],
        backgroundColor: 'rgba(209, 233, 160, 0.65)',
      }],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Hours Slept this Week',
          fontSize: 25,
        },
      }
    }
  })
},

renderWeeklyQualityOfSleep (sleepQuality) {
  const weeklySleepQualityArray = sleepQuality;
  const myWeeklySleepQualityChart = new Chart(weeklySleepQuality, {
    type: 'bar',
    data: {
      labels: [weeklySleepQualityArray[0].date, weeklySleepQualityArray[1].date, weeklySleepQualityArray[2].date, weeklySleepQualityArray[3].date, weeklySleepQualityArray[4].date, weeklySleepQualityArray[5].date, weeklySleepQualityArray[6].date],
      datasets: [{
        label: 'Sleep Quality',
        data: [weeklySleepQualityArray[0].sleepQuality, weeklySleepQualityArray[1].sleepQuality, weeklySleepQualityArray[2].sleepQuality,
        weeklySleepQualityArray[3].sleepQuality,
        weeklySleepQualityArray[4].sleepQuality, weeklySleepQualityArray[5].sleepQuality, weeklySleepQualityArray[6].sleepQuality],
        backgroundColor: 'rgba(160, 233, 198, 0.65)',
      }],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Sleep Quality this Week',
          fontSize: 25,
        },

      }
    }
  })
},

renderWeeklySteps (totalSteps) {
  const weeklyStepsArray = totalSteps;
  const myWeeklyStepsChart = new Chart(weeklyStepsGraph, {
    type: 'bar',
    data: {
      labels: [weeklyStepsArray[0].date, weeklyStepsArray[1].date, weeklyStepsArray[2].date, weeklyStepsArray[3].date, weeklyStepsArray[4].date, weeklyStepsArray[5].date, weeklyStepsArray[6].date],
      datasets: [{
        label: 'Numbers of Steps',
        data: [weeklyStepsArray[0].numSteps, weeklyStepsArray[1].numSteps, weeklyStepsArray[2].numSteps,
        weeklyStepsArray[3].numSteps,
        weeklyStepsArray[4].numSteps, weeklyStepsArray[5].numSteps, weeklyStepsArray[6].numSteps],
        backgroundColor: 'rgba(160, 233, 198, 0.65)',
      }],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Steps Walked Over the Week',
          fontSize: 25,
        },

      }
    }
  })
},

renderWeeklyStairs (totalStairs) {
  const weeklyStairsArray = totalStairs;
  const myWeeklyStairsChart = new Chart(weeklyStairsClimbedGraph, {
    type: 'bar',
    data: {
      labels: [weeklyStairsArray[0].date, weeklyStairsArray[1].date, weeklyStairsArray[2].date, weeklyStairsArray[3].date, weeklyStairsArray[4].date, weeklyStairsArray[5].date, weeklyStairsArray[6].date],
      datasets: [{
        label: 'Numbers of Stairs Climbed',
        data: [weeklyStairsArray[0].flightsOfStairs, weeklyStairsArray[1].flightsOfStairs, weeklyStairsArray[2].flightsOfStairs,
        weeklyStairsArray[3].flightsOfStairs,
        weeklyStairsArray[4].flightsOfStairs, weeklyStairsArray[5].flightsOfStairs, weeklyStairsArray[6].flightsOfStairs],
        backgroundColor: 'rgba(160, 233, 198, 0.65)',
      }],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Flights of Stairs Climbed Over the Week',
          fontSize: 25,
        },

      }
    }
  })
},

renderWeeklyMins(totalMins) {
  const weeklyMinsArray = totalMins;
  const myWeeklyMinsChart = new Chart(weeklyActiveMinsGraph, {
    type: 'bar',
    data: {
      labels: [weeklyMinsArray[0].date, weeklyMinsArray[1].date, weeklyMinsArray[2].date, weeklyMinsArray[3].date, weeklyMinsArray[4].date, weeklyMinsArray[5].date, weeklyMinsArray[6].date],
      datasets: [{
        label: 'Mins Active',
        data: [weeklyMinsArray[0].minutesActive, weeklyMinsArray[1].minutesActive, weeklyMinsArray[2].minutesActive,
        weeklyMinsArray[3].minutesActive,
        weeklyMinsArray[4].minutesActive, weeklyMinsArray[5].minutesActive, weeklyMinsArray[6].minutesActive],
        backgroundColor: 'rgba(160, 233, 198, 0.65)',
      }],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Minutes Active Over the Week',
          fontSize: 25,
        },

      }
    }
  })
}

}

export default charts
