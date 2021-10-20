
import './css/styles.css';

import './images/turing-logo.png'

// import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';
import {getUserData, getSleepData, getActivityData,getHydrationData} from './api'

let users;

const infoCard = document.getElementById('cardInfo');
const stepComparison = document.getElementById('stepComparison');




const renderInfoCard = (data) => {
  let users = new UserRepository(data);
  let user = new User(data[users.retrieveRandomUser()]);
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

const onPageLoad = () => {
  getUserData();
}

window.addEventListener('load', onPageLoad);

export default renderInfoCard;
