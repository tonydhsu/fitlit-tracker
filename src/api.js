import {renderInfoCard, renderWaterInfo, renderActivityInfo, renderSleepInfo} from "./scripts";

const getUserData = () => {
  fetch("https://pacific-badlands-43237.herokuapp.com/api/v1/users")
    .then(response => response.json())
    .then((data) => {renderInfoCard(data.userData)})
}

const getSleepData = () => {
  fetch("https://pacific-badlands-43237.herokuapp.com/api/v1/sleep")
    .then(response => response.json())
    .then((data) => {renderSleepInfo(data.sleepData)})
}

const getActivityData = () => {
  fetch("https://pacific-badlands-43237.herokuapp.com/api/v1/activity")
    .then(response => response.json())
    .then((data) => {renderActivityInfo(data.activityData)})
}

const getHydrationData = () => {
  fetch("https://pacific-badlands-43237.herokuapp.com/api/v1/hydration")
    .then(response => response.json())
    .then((data) => {renderWaterInfo(data.hydrationData)})
}

export {
  getUserData,
  getSleepData,
  getActivityData,
  getHydrationData
}
