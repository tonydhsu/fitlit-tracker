import './css/styles.scss';
import './images/friends-icon.svg'
import './images/activity-icon.svg'
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';
import Activity from './Activity';
import {fetchData, addData} from './api'
import domUpdates from './domUpdates';
import charts from './charts';

const sleepDateInput = document.getElementById('sleepDateInput');
const sleepQualityInput = document.getElementById('sleepQualityInput');
const sleepHoursInput = document.getElementById('sleepHoursInput');
const sleepBtnForm = document.getElementById('sleepBtnForm');
const hydrationDateInput = document.getElementById('hydrationDateInput');
const hydrationInput = document.getElementById('hydrationInput');
const hydrationBtnForm = document.getElementById('hydrationBtnForm');
const activityDateInput = document.getElementById('activityDateInput');
const stepsInput = document.getElementById('stepsInput');
const minutesInput = document.getElementById('minutesInput');
const stairsInput = document.getElementById('stairsInput');
const activityBtnForm = document.getElementById('activityBtnForm');
const addNewBtn = document.getElementById('addNewBtn');

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
  domUpdates.renderFriends(user, users);
}

const addMySleepData = (event) => {
  event.preventDefault()
  if (domUpdates.resolveSleepForm()) {
    const userSleepData = {
      userID: user.id,
      date: sleepDateInput.value,
      hoursSlept: Number(sleepHoursInput.value),
      sleepQuality: Number(sleepQualityInput.value)
    }
    addData(userSleepData, 'sleep')
      .then(data => updateUserData('sleepData', data))
      .catch(err => console.log(err, "error"))
  }
}

const addMyHydrationData = (event) => {
  event.preventDefault()
  if (domUpdates.resolveHydrationForm()) {
    const userHydrationData = {
      userID: user.id,
      date: hydrationDateInput.value,
      numOunces: Number(hydrationInput.value)
    }
    addData(userHydrationData, 'hydration')
      .then(data => updateUserData('hydrationData', data))
      .catch(err => console.log(err, "error"))
  }
}

const addMyActivityData = (event) => {
  event.preventDefault()
  if (domUpdates.resolveActivityForm()) {
    const userActivityData = {
      userID: user.id,
      date: activityDateInput.value,
      flightsOfStairs: Number(stairsInput.value),
      minutesActive: Number(minutesInput.value),
      numSteps: Number(stepsInput.value)
    }
    addData(userActivityData, 'activity')
      .then(data => updateUserData('activityData', data))
      .catch(err => console.log(err, "error"))
  }
}

const updateUserData = (property, dataObject) => {
  user[property].push(dataObject)
}

const renderWaterInfo = () => {
  user.hydrationData = hydration.retrieveWaterData(user.id);
  domUpdates.renderWaterWidget(user.returnUserTotalDataPerDay("hydrationData", user.hydrationData[user.hydrationData.length - 1].date, "numOunces"));
  charts.renderWeeklyWater(user.returnWeeklyConsumption());
}

const renderActivityInfo = () => {
  user.activityData = activity.retrieveActivityData(user.id);
  domUpdates.renderStepsWidget(user.returnUserTotalDataPerDay("activityData", user.activityData[user.activityData.length - 1].date, "numSteps"));
  domUpdates.renderMilesWidget(user.milesWalked(user.activityData[user.activityData.length - 1].date));
  domUpdates.renderMinsWidget(user.returnUserTotalDataPerDay("activityData", user.activityData[user.activityData.length - 1].date, "minutesActive"));
  domUpdates.compareActivitySteps(activity.retrieveGivenDateAverage(user.activityData[user.activityData.length - 1].date, "numSteps"));
  domUpdates.compareActivityMins(activity.retrieveGivenDateAverage(user.activityData[user.activityData.length - 1].date, "minutesActive"));
  domUpdates.compareActivityStairs(activity.retrieveGivenDateAverage(user.activityData[user.activityData.length - 1].date, "flightsOfStairs"));
  charts.renderWeeklySteps(user.returnWeeklyActivityData("2019/06/15", "numSteps"));
  charts.renderWeeklyStairs(user.returnWeeklyActivityData("2019/06/15", "flightsOfStairs"));
  charts.renderWeeklyMins(user.returnWeeklyActivityData("2019/06/15", "minutesActive"));
}

const renderSleepInfo = () => {
  user.sleepData = sleep.retrieveSleepData(user.id);
  domUpdates.renderHoursOfSleepWidget(user.returnUserTotalDataPerDay("sleepData", user.sleepData[user.sleepData.length - 1].date, "hoursSlept"));
  domUpdates.renderQualityOfSleepWidget(user.returnUserTotalDataPerDay("sleepData", user.sleepData[user.sleepData.length - 1].date, "sleepQuality"));
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
