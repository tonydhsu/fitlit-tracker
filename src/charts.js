const weeklyWater = document.getElementById('weeklyWater').getContext('2d');
const weeklySleepQuality = document.getElementById('weeklySleepQuality').getContext('2d');
const weeklySleepHours = document.getElementById('weeklySleepHours').getContext('2d');

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

}

export default charts
