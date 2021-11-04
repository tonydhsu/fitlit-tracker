// import user from './scripts';
// import User from './User'

const infoCard = document.getElementById('cardInfo');
const stepComparison = document.getElementById('stepComparison');
const averageSleepHours = document.getElementById('averageSleepHours');
const averageSleepQuality = document.getElementById('averageSleepQuality');
const waterWidget = document.getElementById('waterWidget');
const hoursOfSleepWidget = document.getElementById('hoursOfSleepWidget');
const sleepQualityWidget = document.getElementById('sleepQualityWidget');






const domUpdates = {

  renderInfoCard(user, firstName) {
    infoCard.innerHTML += `
    <h1>Hi ${firstName}!</h1>
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
  },

  compareSteps(user, avgSteps) {
    stepComparison.innerText = `The average step goal amongst all users is: ${avgSteps}. Your step goal is ${user.dailyStepGoal}.`;
  },

  renderAverageSleepHours(avgSleepHours) {
    averageSleepHours.innerText = `You sleep an average of ${avgSleepHours} hours a day`;
  },

  renderAverageSleepQuality(avgSleepQuality) {
    averageSleepQuality.innerText = `Your sleep quality is an average of ${avgSleepQuality}`
  },

  renderWaterWidget(totalWaterPerDay) {
    waterWidget.innerText = `${totalWaterPerDay}`
  },

  renderHoursOfSleepWidget(totalHoursSlept) {
    hoursOfSleepWidget.innerText = `${totalHoursSlept}`
  },

  renderQualityOfSleepWidget(totalSleepQuality) {
    sleepQualityWidget.innerText = `${totalSleepQuality}`
  }
}

export default domUpdates;
