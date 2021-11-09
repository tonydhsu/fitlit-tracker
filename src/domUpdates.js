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
//Drop down menu
const dropDownMenu = document.getElementById('dropDownMenu');
//sleep selectors
const sleepForm = document.getElementById('sleepForm');
const sleepDateInput = document.getElementById('sleepDateInput');
const sleepQualityInput = document.getElementById('sleepQualityInput');
const sleepHoursInput = document.getElementById('sleepHoursInput');
//hydration selectors
const hydrationForm = document.getElementById('hydrationForm');
const hydrationDateInput = document.getElementById('hydrationDateInput');
const hydrationInput = document.getElementById('hydrationInput');
//activity selectors
const activityForm = document.getElementById('activityForm');
const activityDateInput = document.getElementById('activityDateInput');
const stepsInput = document.getElementById('stepsInput');
const minutesInput = document.getElementById('minutesInput');
const stairsInput = document.getElementById('stairsInput');
const sleepInputFeedback = document.getElementById('sleepInputFeedback');
const waterInputFeedback = document.getElementById('waterInputFeedback');
const activityInputFeedback = document.getElementById('activityInputFeedback');
const correctInputFeedback = document.getElementById('correctInputFeedback');
const friendsSection = document.getElementById('friendsSection');


const domUpdates = {

  renderInfoCard(user, firstName) {
    infoCard.innerHTML = ''
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
    averageSleepQuality.innerText = `Your sleep quality is an average of ${avgSleepQuality}`;
  },

  renderWaterWidget(totalWaterPerDay) {
    waterWidget.innerText = `${totalWaterPerDay}`;
  },

  renderHoursOfSleepWidget(totalHoursSlept) {
    hoursOfSleepWidget.innerText = `${totalHoursSlept}`;
  },

  renderQualityOfSleepWidget(totalSleepQuality) {
    sleepQualityWidget.innerText = `${totalSleepQuality}`;
  },

  renderStepsWidget(totalStepsPerDay) {
    stepsWidget.innerText = `${totalStepsPerDay}`;
  },

  renderMilesWidget(totalMilesPerDay) {
    milesWidget.innerText = `${totalMilesPerDay}`;
  },

  renderMinsWidget(totalMinsPerDay) {
    minsWidget.innerText = `${totalMinsPerDay}`;
  },

  compareActivitySteps(avgStepsPerDay) {
    stepsPerDayComparison.innerText = `The average steps walked for all users is: ${avgStepsPerDay}.`;
  },

  compareActivityMins(avgMinsPerDay) {
    minsPerDayComparison.innerText = `The average active minutes amongst all users is: ${avgMinsPerDay}.`;
  },

  compareActivityStairs(avgStairsPerDay) {
    stairsPerDayComparison.innerText = `The average flights of stairs climbed for all users is: ${avgStairsPerDay}.`;
  },

  showForm() {
    correctInputFeedback.innerText = '';
    sleepInputFeedback.innerText = '';
    waterInputFeedback.innerText = '';
    activityInputFeedback.innerText = '';
    if (dropDownMenu.value === 'sleep') {
      show(sleepForm)
      hide(hydrationForm)
      hide(activityForm)
    } else if (dropDownMenu.value === 'hydration') {
      show(hydrationForm)
      hide(sleepForm)
      hide(activityForm)
    } else {
      show(activityForm)
      hide(sleepForm)
      hide(hydrationForm)
    }
  },

  resolveSleepForm() {
    if (sleepDateInput.value && sleepQualityInput.value && sleepHoursInput.value) {
      hide(sleepForm);
      correctInputFeedback.innerText = 'Thanks for the data, yum yum yum.';
    }
    else {
      sleepInputFeedback.innerText = 'Please fill out all fields.'
    }
  },

  resolveHydrationForm() {
    if (hydrationDateInput.value && hydrationInput.value) {
      hide(hydrationForm);
      correctInputFeedback.innerText = 'Thanks for the data, yum yum yum.';
    }
    else {
      waterInputFeedback.innerText = 'Please fill out all fields.'
    }
  },

  resolveActivityForm() {
    if (activityDateInput.value && stairsInput.value && minutesInput.value && stepsInput) {
      hide(activityForm);
      correctInputFeedback.innerText = 'Thanks for the data, yum yum yum.';
    }
    else {
      activityInputFeedback.innerText = 'Please fill out all fields.';
    }
  },

  renderFriends(user, users) {
    const friends = [];
    user.friends.forEach((id) => {
      users.data.filter((user) => {
        return user.id === id
      }).map((user) => {
        return friends.push(user.name)
      })
    })
    friends.forEach(friend => {
      friendsSection.innerHTML += `
      <section class="friends">
        <img src="images/friends-icon.svg" alt="friend-icon"/>
        <h2>${friend}</h4>
      </section>`
    })
  }
}

const show = (element) => {
  element.classList.remove('hidden')
}

const hide = (element) => {
  element.classList.add('hidden')
}
export default domUpdates;
