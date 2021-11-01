import {renderInfoCard, renderWaterInfo, renderActivityInfo, renderSleepInfo, createInitialDashboard} from "./scripts";

const getUserData = () => {
  fetch("http://localhost:3001/api/v1/users")
    .then(response => response.json())
    .then((data) => {createInitialDashboard(data.userData)})
};

const getSleepData = () => {
  fetch("http://localhost:3001/api/v1/sleep")
    .then(response => response.json())
    .then((data) => {renderSleepInfo(data.sleepData)})
};

const getActivityData = () => {
  fetch("http://localhost:3001/api/v1/activity")
    .then(response => response.json())
    .then((data) => {renderActivityInfo(data.activityData)})
};

const getHydrationData = () => {
  fetch("http://localhost:3001/api/v1/hydration")
    .then(response => response.json())
    .then((data) => {renderWaterInfo(data.hydrationData)})
};

export {
  getUserData,
  getSleepData,
  getActivityData,
  getHydrationData
};
