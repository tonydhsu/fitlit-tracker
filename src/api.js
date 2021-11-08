const fetchData = (param) => {
  return fetch(`http://localhost:3001/api/v1/${param}`)
    .then(response => response.json())
}


const addSleepData = (sleepObject) => {
  return fetch("http://localhost:3001/api/v1/sleep", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(sleepObject)
  })
  .then(response => response.json())
}

const addHydrationData = (hydrationObject) => {
  return fetch("http://localhost:3001/api/v1/hydration", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(hydrationObject)
  })
  .then(response => response.json())
}

const addActivityData = (activityObject) => {
  return fetch("http://localhost:3001/api/v1/activity", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(activityObject)
  })
  .then(response => response.json())
}



export {
  fetchData,
  addSleepData,
  addHydrationData,
  addActivityData
};
