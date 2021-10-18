// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// An example of how you tell webpack to use a JS file

import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';

let users = userData;

const infoCard = document.getElementById('cardInfo');
const stepComparison = document.getElementById('stepComparison');

let user = new User(userData[0]);

const onPageLoad = () => {
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
  compareSteps();
}

const compareSteps = () => {
  let users = new UserRepository(userData);
  stepComparison.innerText = `The average step goal amoungst all users is: ${users.retrieveUsersAvgStepGoals()}. Your step goal is ${user.dailyStepGoal}.`;
}

window.addEventListener('load', onPageLoad);
