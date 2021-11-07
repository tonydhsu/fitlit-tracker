import './css/styles.scss';
import './images/turing-logo.png'
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';
import {fetchData} from './api'
import domUpdates from './domUpdates';
import charts from './charts';

const getUserNewData = document.getElementById("data-button").onclick = function () {location.href = "https://www.youtube.com"};

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

const renderWaterInfo = () => {
  user.hydrationData = hydration.retrieveWaterData(user.id);
  domUpdates.renderWaterWidget(user.returnUserTotalDataPerDay("hydrationData", user.hydrationData[user.hydrationData.length-1].date, "numOunces"));
  charts.renderWeeklyWater(user.returnWeeklyConsumption());
}

const renderActivityInfo = () => {
  user.activityData = activity.retrieveActivityData(user.id);
  domUpdates.renderStepsWidget(user.returnUserTotalDataPerDay("activityData", "2019/06/15", "numSteps");
  domUpdates.renderMilesWidget(user.milesWalked("2019/06/15"));
  domUpdates.renderMinsWidget(user.returnUserTotalDataPerDay("activityData", "2019/06/15", "minutesActive"));
  domUpdates.compareActivitySteps(userRepo.retrieveGivenDateAverage("2019/06/15", "numSteps"));
  domUpdates.compareActivityMins(userRepo.retrieveGivenDateAverage("2019/06/15", "minutesActive"));
  domUpdates.compareActivityStairs(userRepo.retrieveGivenDateAverage("2019/06/15", "flightsOfStairs"));
  // charts.renderWeeklySteps(user.returnWeeklyActivityData("2019/06/15", "numSteps"));
  // charts.renderWeeklyStairs(user.returnWeeklyActivityData("2019/06/15", "flightsOfStairs"));
  // charts.renderWeeklyMins(user.returnWeeklyActivityData("2019/06/15", "minutesActive"));
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

window.addEventListener('load', onPageLoad);

export default user;
