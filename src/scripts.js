import './css/styles.css';
import './images/turing-logo.png'
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';
import {getUserData, getSleepData, getActivityData, getHydrationData} from './api'

const infoCard = document.getElementById('cardInfo');
const stepComparison = document.getElementById('stepComparison');
const waterWidget = document.getElementById('waterWidget');
const weeklyWater = document.getElementById('weeklyWater').getContext('2d');
const weeklySleepQuality = document.getElementById('weeklySleepQuality').getContext('2d');
const weeklySleepHours = document.getElementById('weeklySleepHours').getContext('2d');
const hoursOfSleepWidget = document.getElementById('hoursOfSleepWidget');
const sleepQualityWidget = document.getElementById('sleepQualityWidget');
const averageSleepHours = document.getElementById('averageSleepHours');
const averageSleepQuality = document.getElementById('averageSleepQuality');
const getUserNewData = document.getElementById("data-button").onclick = function () {location.href = "https://www.youtube.com"};

let users;
let user;

const createInitialDashboard = (data) => {
  users = new UserRepository(data);
  user = new User(data[users.retrieveRandomUser()]);
  getHydrationData();
  getSleepData();
  renderInfoCard();
}

const renderInfoCard = () => {
  infoCard.innerHTML += `
  <h1>Hi ${user.returnFirstName()}!</h1>
  <h3>User Information</h3>
  <h4>Name:</h4>
  <p>${user.name}</p>
  <h4>Email:</h4>
  <p>${user.email}</p>
  <h4>Address:</h4>
  <p>${user.address}</p>
  <h4>Stride Length</h4>
  <p>${user.strideLength}</p>
  <h4>Daily Step Goal</h4>
  <p>${user.dailyStepGoal}</p>`
  compareSteps(user, users);
}

const compareSteps = (user, totalUsers) => {
  stepComparison.innerText = `The average step goal amongst all users is: ${totalUsers.retrieveUsersAvgData('dailyStepGoal')}. Your step goal is ${user.dailyStepGoal}.`;
}

const renderAverageSleepHours = () => {
  averageSleepHours.innerText = `You sleep an average of ${user.returnUserAverageDataPerDay('sleepData', 'hoursSlept')} hours a day`;
}

const renderAverageSleepQuality = () => {
  averageSleepQuality.innerText = `Your sleep quality is an average of ${user.returnUserAverageDataPerDay('sleepData', 'sleepQuality')}`
}

const renderWaterInfo = (waterData) => {
  let waterInfo = new Hydration(waterData);
  user.hydrationData = waterInfo.retrieveWaterData(user.id);
  renderWaterWidget();
  renderWeeklyWater();
}

const renderWaterWidget = () => {
  waterWidget.innerText = `${user.returnUserTotalDataPerDay("hydrationData", user.hydrationData[user.hydrationData.length-1].date, "numOunces")}`
}

const renderHoursOfSleepWidget = () => {
  hoursOfSleepWidget.innerText = `${user.returnUserTotalDataPerDay("sleepData",user.sleepData[user.sleepData.length-1].date, "hoursSlept")}`
}

const renderQualityOfSleepWidget = () => {
  sleepQualityWidget.innerText = `${user.returnUserTotalDataPerDay("sleepData", user.sleepData[user.sleepData.length-1].date, "sleepQuality")}`
}

const renderWeeklyWater = () => {
  const weeklyWaterArray = user.returnWeeklyConsumption();
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
};

const renderWeeklySleepHours = () => {
  const weeklySleepArray = user.returnWeeklySleepData("2019/06/15", "hoursSlept");
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
}

const renderWeeklyQualityOfSleep = () => {
  const weeklySleepQualityArray = user.returnWeeklySleepData("2019/06/15", "sleepQuality");
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
}


const renderActivityInfo = (activityData) => {
  console.log(activityData);
}

const renderSleepInfo = (sleepData) => {
  let sleepInfo = new Sleep(sleepData);
  user.sleepData = sleepInfo.retrieveSleepData(user.id);
  renderHoursOfSleepWidget();
  renderQualityOfSleepWidget();
  renderAverageSleepHours();
  renderAverageSleepQuality();
  renderWeeklySleepHours();
  renderWeeklyQualityOfSleep();
  console.log('renderSleepInfo', user.returnWeeklySleepHours('2019/06/15'));
}

const onPageLoad = () => {
  getUserData();
}

window.addEventListener('load', onPageLoad);

export {
  renderInfoCard,
  renderSleepInfo,
  renderActivityInfo,
  renderWaterInfo,
  createInitialDashboard,
};
