const fetchData = (param) => {
    return fetch(`http://localhost:3001/api/v1/${param}`)
      .then(response => response.json())
}


const addSleepData = (object) => {
  fetch("http://localhost:3001/api/v1/sleep", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(object)
  })
  .then(response => response.json())
  .then(data => console.log((data)))
  .catch(err => console.log(error, "error"))
}

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
  fetchData,
  addSleepData
  // addHydrationData,
  // addActivityData
};
