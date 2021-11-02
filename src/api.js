// import {renderInfoCard, renderWaterInfo, renderActivityInfo, renderSleepInfo, createInitialDashboard} from "./scripts";

const getUserData = () => {
  return fetch("http://localhost:3001/api/v1/users")
    .then(response => response.json())
    .then((data) => {return data})
};

const getSleepData = () => {
  return fetch("http://localhost:3001/api/v1/sleep")
    .then(response => response.json())
    .then((data) => {return data})
};

const getActivityData = () => {
  return fetch("http://localhost:3001/api/v1/activity")
    .then(response => response.json())
    .then((data) => {return data})
};

const getHydrationData = () => {
  return fetch("http://localhost:3001/api/v1/hydration")
    .then(response => response.json())
    .then((data) => {return data})
};




// const fetchData = (param) => {
//     return fetch(`https://pacific-badlands-43237.herokuapp.com/api/v1/${param}`)
//       .then(response => response.json())
//       .then((data) => {return data})
// }

// const allData = () => {
//   Promise.all([fetchData(users), fetchData(sleep), fetchData(activity), fetchData(hydration)])
//     .then(values => {return values})
// };
//
// console.log(allData())

export {
  getUserData,
  getSleepData,
  getActivityData,
  getHydrationData
};
