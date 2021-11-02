// import {renderInfoCard, renderWaterInfo, renderActivityInfo, renderSleepInfo, createInitialDashboard} from "./scripts";

const getUserData = () => {
  return fetch("https://pacific-badlands-43237.herokuapp.com/api/v1/users")
    .then(response => response.json())
    .then((data) => {return data})
};

const getSleepData = () => {
  return fetch("https://pacific-badlands-43237.herokuapp.com/api/v1/sleep")
    .then(response => response.json())
    .then((data) => {return data})
};

const getActivityData = () => {
  return fetch("https://pacific-badlands-43237.herokuapp.com/api/v1/activity")
    .then(response => response.json())
    .then((data) => {return data})
};

const getHydrationData = () => {
  return fetch("https://pacific-badlands-43237.herokuapp.com/api/v1/hydration")
    .then(response => response.json())
    .then((data) => {return data})
};

export {
  getUserData,
  getSleepData,
  getActivityData,
  getHydrationData
};
