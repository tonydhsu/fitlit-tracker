// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// An example of how you tell webpack to use a JS file

// import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';

let users;

const infoCard = document.getElementById('cardInfo');
const stepComparison = document.getElementById('stepComparison');

const onPageLoad = () => {
  getData();
  let user = new User(users.userData[0]);
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

const getData = () => {
  return fetch("https://pacific-badlands-43237.herokuapp.com/api/v1/users")
  .then(response => response.json());
  .then(data => users = new UserRepository(data))
  console.log(users);
}

const compareSteps = () => {
  let users = new UserRepository(userData);
  stepComparison.innerText = `The average step goal amoungst all users is: ${users.retrieveUsersAvgStepGoals()}. Your step goal is ${user.dailyStepGoal}.`;
}

window.addEventListener('load', onPageLoad);
