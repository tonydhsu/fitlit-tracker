// import user from './scripts';
// import User from './User'

const infoCard = document.getElementById('cardInfo');
const stepComparison = document.getElementById('stepComparison');
const averageSleepHours = document.getElementById('averageSleepHours');
const averageSleepQuality = document.getElementById('averageSleepQuality');
const waterWidget = document.getElementById('waterWidget');
const hoursOfSleepWidget = document.getElementById('hoursOfSleepWidget');
const sleepQualityWidget = document.getElementById('sleepQualityWidget');
const stepsWidget = document.getElementById('stepsWidget');
const milesWidget = document.getElementById('milesWidget');
const minsWidget = document.getElementById('minsWidget');
const stepsPerDayComparison = document.getElementById('actualStepsComparison');
const minsPerDayComparison = document.getElementById('minutesActiveComparison');
const stairsPerDayComparison = document.getElementById('stairsComparison');

const domUpdates = {

  renderInfoCard(user, firstName) {
    infoCard.innerHTML += `
    <h1>Hi ${firstName}!</h1>
    <h2>User Information</h2>
    <h2>Name:</h2>
    <p>${user.name}</p>
    <h2>Email:</h2>
    <p>${user.email}</p>
    <h2>Address:</h2>
    <p>${user.address}</p>
    <h2>Stride Length</h2>
    <p>${user.strideLength}</p>
    <h2>Daily Step Goal</h2>
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
  },

  renderStepsWidget(totalStepsPerDay) {
    stepsWidget.innerText = `${totalStepsPerDay}`
  },

  renderMilesWidget(totalMilesPerDay) {
    milesWidget.innerText = `${totalMilesPerDay}`
  },

  renderMinsWidget(totalMinsPerDay) {
    minsWidget.innerText = `${totalMinsPerDay}`
  },

  compareActivitySteps(user, avgStepsPerDay) {
    stepsPerDayComparison .innerText = `The average steps walked per all users is: ${avgStepsPerDay}. Your total steps per day is ${user.name}.`;
  },

  compareActivityMins(user, avgMinsPerDay) {
    compareActivityMins.innerText = `The average active minutes amongst all users is: ${avgMilesPerDay}. Your total active minutes per day is ${user.name}.`;
  },

  compareActivityStairs(user, avgStairsPerDay) {
    compareActivityStairs.innerText = `The average flights of stairs amongst all users is: ${avgStairsPerDay}. Your total flight of stairs per day is ${user.name}.`;
  },




}

export default domUpdates;
