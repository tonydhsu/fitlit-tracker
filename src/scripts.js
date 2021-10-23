
import './css/styles.css';

import './images/turing-logo.png'

// import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';
import {getUserData, getSleepData, getActivityData, getHydrationData} from './api'

const infoCard = document.getElementById('cardInfo');
const stepComparison = document.getElementById('stepComparison');
const waterWidget = document.getElementById('waterWidget');
const weeklyWater = document.getElementById('weeklyWater');
const hoursOfSleepWidget = document.getElementById('hoursOfSleepWidget');
const sleepQualityWidget = document.getElementById('sleepQualityWidget');
const averageSleepHours = document.getElementById('averageSleepHours');
const averageSleepQuality = document.getElementById('averageSleepQuality');


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
  <h2>Hi ${user.returnFirstName()}!</h2>
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
  stepComparison.innerText = `The average step goal amoungst all users is: ${totalUsers.retrieveUsersAvgStepGoals()}. Your step goal is ${user.dailyStepGoal}.`;
}

const renderAverageSleepHours = () => {
  averageSleepHours.innerText = `You sleep an average of ${user.returnAverageSleepPerDay()} hours a day`;
}

const renderAverageSleepQuality = () => {
  averageSleepQuality.innerText = `Your sleep quality is an average of ${user.returnAverageSleepQualityPerDay()}`
}

const renderWaterInfo = (waterData) => {
  let waterInfo = new Hydration(waterData);
  user.hydrationData = waterInfo.retrieveWaterData(user.id);
  // console.log(Math.floor(user.returnAverageWaterPerDay()))
  renderWaterWidget();
  renderWeeklyWater();
}

const renderWaterWidget = () => {
  waterWidget.innerText = `${user.returnTotalWaterConsumption(user.hydrationData[user.hydrationData.length-1].date)}`
}

const renderHoursOfSleepWidget = () => {
  hoursOfSleepWidget.innerText = `${user.returnSleepHoursThatDay(user.sleepData[user.sleepData.length-1].date)}`
}

const renderQualityOfSleepWidget = () => {
  sleepQualityWidget.innerText = `${user.returnSleepQualityThatDay(user.sleepData[user.sleepData.length-1].date)}`
}

const renderWeeklyWater = () => {
  const weeklyWaterArray = user.returnWeeklyConsumption()
  weeklyWater.innerHTML += `<h4>${weeklyWaterArray[0].date}: ${weeklyWaterArray[0].numOunces} oz</h4>
  <h4>${weeklyWaterArray[1].date}: ${weeklyWaterArray[1].numOunces} oz</h4>
  <h4>${weeklyWaterArray[2].date}: ${weeklyWaterArray[2].numOunces} oz</h4>
  <h4>${weeklyWaterArray[3].date}: ${weeklyWaterArray[3].numOunces} oz</h4>
  <h4>${weeklyWaterArray[4].date}: ${weeklyWaterArray[4].numOunces} oz</h4>
  <h4>${weeklyWaterArray[5].date}: ${weeklyWaterArray[5].numOunces} oz</h4>
  <h4>${weeklyWaterArray[6].date}: ${weeklyWaterArray[6].numOunces} oz</h4>`
}

const renderWeeklySleepHours = () => {

}

const renderWeeklyQualityOfSleep = () => {

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
  // console.log('sleep', Math.floor(user.returnAverageSleepPerDay()))
  // console.log('avg hours', users.retrieveUsersAvgSleepQuality(sleepData))
}

const onPageLoad = () => {
  getUserData();
  // getActivityData()
  // getSleepData();
}

window.addEventListener('load', onPageLoad);

export {
  renderInfoCard,
  renderSleepInfo,
  renderActivityInfo,
  renderWaterInfo,
  createInitialDashboard,
};
