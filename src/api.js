// import {renderInfoCard, renderWaterInfo, renderActivityInfo, renderSleepInfo, createInitialDashboard} from "./scripts";

// const getUserData = () => {
//   return fetch("http://localhost:3001/api/v1/users")
//     .then(response => response.json())
//     .then((data) => {return data})
// };
//
// const getSleepData = () => {
//   return fetch("http://localhost:3001/api/v1/sleep")
//     .then(response => response.json())
//     .then((data) => {return data})
// };
//
// const getActivityData = () => {
//   return fetch("http://localhost:3001/api/v1/activity")
//     .then(response => response.json())
//     .then((data) => {return data})
// };
//
// const getHydrationData = () => {
//   return fetch("http://localhost:3001/api/v1/hydration")
//     .then(response => response.json())
//     .then((data) => {return data})
// };

const fetchData = (param) => {
    return fetch(`https://pacific-badlands-43237.herokuapp.com/api/v1/${param}`)
      .then(response => response.json())
}


// const addSleepData = () => {
//   fetch("http://localhost:3001/api/v1/sleep", {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ userID: <number>, date: <string> , hoursSlept: <number> , sleepQuality:<number> })
//   })
//   .then(response => response.json())
//   .then(data => WHATEVERFUNCTIONWEMAKEFORTHIS(data))
//   .catch(err => console.log(error, "error"))
// }
//
// const addHydrationData = () => {
//   fetch("http://localhost:3001/api/v1/hydration", {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ userID: <number>, date: <string> , numOunces: <number> })
//   })
//   .then(response => response.json())
//   .then(data => WHATEVERFUNCTIONWEMAKEFORTHIS(data))
//   .catch(err => console.log(error, "error"))
// }
//
// const addActivityData = () => {
//   fetch("http://localhost:3001/api/v1/activity", {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ userID: <number>, date: <string>, flightsOfStairs: <number>, minutesActive: <number>, numSteps: <number>)
//   })
//   .then(response => response.json())
//   .then(data => WHATEVERFUNCTIONWEMAKEFORTHIS(data))
//   .catch(err => console.log(error, "error"))
// }



export {
  fetchData
  // getUserData,
  // getSleepData,
  // getActivityData,
  // getHydrationData
  // addSleepData,
  // addHydrationData,
  // addActivityData
};
