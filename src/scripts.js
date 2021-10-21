
import './css/styles.css';

import './images/turing-logo.png'

// import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import {getUserData, getSleepData, getActivityData, getHydrationData} from './api'

let users;
let user;

const infoCard = document.getElementById('cardInfo');
const stepComparison = document.getElementById('stepComparison');

const renderInfoCard = (data) => {
  users = new UserRepository(data);
  user = new User(data[users.retrieveRandomUser()]);
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

const renderWaterInfo = (waterData) => {
  let waterInfo = new Hydration(waterData);
  waterInfo.data.map((element) => {
    if(user.id === element.userID) {
      return user.hydrationData.push(element);
    }
  })
  console.log(user.returnAverageWaterPerDay());
}

const renderActivityInfo = (activityData) => {
  console.log(activityData);
}

const renderSleepInfo = (sleepData) => {
  console.log(sleepData);
}

const onPageLoad = () => {
  getUserData();
  getHydrationData();
  // getActivityData()
  // getSleepData();
}

window.addEventListener('load', onPageLoad);

export {
  renderInfoCard,
  renderSleepInfo,
  renderActivityInfo,
  renderWaterInfo
};
