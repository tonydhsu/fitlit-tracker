import './css/styles.scss';
import './images/turing-logo.png'
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';
import Activity from './Activity';
import {fetchData, addSleepData, addHydrationData, addActivityData} from './api'
import domUpdates from './domUpdates';
import charts from './charts';

const sleepForm = document.getElementById('sleepForm');
const sleepDateInput = document.getElementById('sleepDateInput');
const sleepQualityInput = document.getElementById('sleepQualityInput');
const sleepHoursInput = document.getElementById('sleepHoursInput');
const sleepBtnForm = document.getElementById('sleepBtnForm');
const hydrationForm = document.getElementById('hydrationForm');
const hydrationDateInput = document.getElementById('hydrationDateInput');
const hydrationInput = document.getElementById('hydrationInput');
const hydrationBtnForm = document.getElementById('hydrationBtnForm');
const activityForm = document.getElementById('activityForm');
const activityDateInput = document.getElementById('activityDateInput');
const stepsInput = document.getElementById('stepsInput');
const minutesInput = document.getElementById('minutesInput');
const stairsInput = document.getElementById('stairsInput');
const activityBtnForm = document.getElementById('activityBtnForm');


let users;
let user;
let hydration;
let sleep;
let activity;


const getData = () => {
  const allPromise = Promise.all([fetchData('users'), fetchData('sleep'), fetchData('activity'), fetchData('hydration')])
    .then(data => {createInitialDashboard(data)})
}

const createInitialDashboard = (data) => {
  users = new UserRepository(data[0].userData);
  user = new User(data[0].userData[users.retrieveRandomUser()]);
  sleep = new Sleep(data[1].sleepData);
  activity = new Activity(data[2].activityData);
  hydration = new Hydration(data[3].hydrationData)
  domUpdates.renderInfoCard(user, user.returnFirstName());
  renderWaterInfo();
  renderSleepInfo();
  domUpdates.compareSteps(user, users.retrieveUsersAvgData('dailyStepGoal'));
  renderActivityInfo()
}

const addMySleepData = (event) => {
  event.preventDefault()
  const userSleepData = {
    userID: user.id,
    date: sleepDateInput.value,
    hoursSlept: Number(sleepHoursInput.value),
    sleepQuality: Number(sleepQualityInput.value)
  }
  addSleepData(userSleepData)
  .then(data => updateUserData('sleepData', data))
  .catch(err => console.log(err, "error"))
}

const addMyHydrationData = (event) => {
  event.preventDefault()
  const userHydrationData = {
    userID: user.id,
    date: hydrationDateInput.value,
    numOunces: Number(hydrationInput.value)
  }

  addHydrationData(userHydrationData)
  .then(data => updateUserData('hydrationData', data))
  .catch(err => console.log(err, "error"))
}

const addMyActivityData = (event) => {
  event.preventDefault()
  const userActivityData = {
    userID: user.id,
    date: activityDateInput.value,
    flightsOfStairs: Number(stairsInput.value),
    minutesActive: Number(minutesInput.value),
    numSteps: Number(stepsInput.value)
  }

  addActivityData(userActivityData)
  .then(data => updateUserData('activityData', data))
  .catch(err => console.log(err, "error"))
}

const updateUserData = (property, dataObject) => {
  user[property].push(dataObject)
  console.log(user[property])
}

const renderWaterInfo = () => {
  user.hydrationData = hydration.retrieveWaterData(user.id);
  domUpdates.renderWaterWidget(user.returnUserTotalDataPerDay("hydrationData", user.hydrationData[user.hydrationData.length-1].date, "numOunces"));
  charts.renderWeeklyWater(user.returnWeeklyConsumption());
}

const renderActivityInfo = () => {
  user.activityData = activity.retrieveActivityData(user.id);
  domUpdates.renderStepsWidget(user.returnUserTotalDataPerDay("activityData", user.activityData[user.activityData.length-1].date, "numSteps"));
  domUpdates.renderMilesWidget(user.milesWalked(user.activityData[user.activityData.length-1].date));
  domUpdates.renderMinsWidget(user.returnUserTotalDataPerDay("activityData", user.activityData[user.activityData.length-1].date, "minutesActive"));
  console.log(users.retrieveGivenDateAverage("2019/06/15", "minutesActive"),"retrieveMethod");
  domUpdates.compareActivitySteps(users.retrieveGivenDateAverage(user.activityData[user.activityData.length-1].date, "numSteps"));
  domUpdates.compareActivityMins(users.retrieveGivenDateAverage(user.activityData[user.activityData.length-1].date, "minutesActive"));
  domUpdates.compareActivityStairs(users.retrieveGivenDateAverage(user.activityData[user.activityData.length-1].date, "flightsOfStairs"));
  charts.renderWeeklySteps(user.returnWeeklyActivityData("2019/06/15", "numSteps"));
  charts.renderWeeklyStairs(user.returnWeeklyActivityData("2019/06/15", "flightsOfStairs"));
  charts.renderWeeklyMins(user.returnWeeklyActivityData("2019/06/15", "minutesActive"));
}

const renderSleepInfo = () => {
  user.sleepData = sleep.retrieveSleepData(user.id);
  domUpdates.renderHoursOfSleepWidget(user.returnUserTotalDataPerDay("sleepData",user.sleepData[user.sleepData.length-1].date, "hoursSlept"));
  domUpdates.renderQualityOfSleepWidget(user.returnUserTotalDataPerDay("sleepData", user.sleepData[user.sleepData.length-1].date, "sleepQuality"));
  domUpdates.renderAverageSleepHours(user.returnUserAverageDataPerDay('sleepData', 'hoursSlept'));
  domUpdates.renderAverageSleepQuality(user.returnUserAverageDataPerDay('sleepData', 'sleepQuality'));
  charts.renderWeeklySleepHours(user.returnWeeklySleepData("2019/06/15", "hoursSlept"));
  charts.renderWeeklyQualityOfSleep(user.returnWeeklySleepData("2019/06/15", "sleepQuality"));
}

const onPageLoad = () => {
  getData();
}

addNewBtn.addEventListener('click', domUpdates.showForm)
sleepBtnForm.addEventListener('click', addMySleepData)
hydrationBtnForm.addEventListener('click', addMyHydrationData);
activityBtnForm.addEventListener('click', addMyActivityData);

window.addEventListener('load', onPageLoad);

export {
  user
}
