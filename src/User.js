class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
    this.hydrationData = userData.hydrationData;
    this.sleepData = userData.sleepData;
    this.activityData = userData.activityData;
  };

  returnFirstName () {
    return this.name.split(' ')[0];
  };

  returnUserAverageDataPerDay(data, property) {
    let totalData = this[data].reduce((avg, day) => {
      avg += day[property];
      return avg;
    }, 0);
    return Math.floor(totalData / this[data].length);
  };

  returnUserTotalDataPerDay(data, date, property) {
     const totalPerDay = this[data].find((day) => {
       return day.date === date;
    });
    return totalPerDay[property];
  };

  returnWeeklyConsumption(){
    const waterWeeklyData = this.hydrationData.slice(this.hydrationData.length-7);
    const weeklyWater = waterWeeklyData.map((day) => {
      return {date: day.date, numOunces: day.numOunces}
    });
    return weeklyWater;
  };

  returnWeeklySleepData(dateEntered, property) {
    const dateEnteredIndex = this.sleepData.indexOf(this.sleepData.find(dateSlept => {
      return dateSlept.date === dateEntered;
    }));
    const sleepWeeklyData = this.sleepData.slice(dateEnteredIndex, dateEnteredIndex + 7);
    const weeklySleepInfo = sleepWeeklyData.map((day) => {
      return {date: day.date, [property]: day[property]}
    });
    return weeklySleepInfo;
  };

  milesWalked(date) {
    const day = this.activityData.find((activityDate) => {
      return activityDate.date === date;
    });

    const miles = day.numSteps * this.strideLength / 5280;
    return Number(miles.toFixed(2));
  };

  avgWeeklyActivity(date) {
    const dateEnteredIndex = this.activityData.indexOf(this.activityData.find(datesActive => {
      return datesActive.date === date;
    }));

    const activeWeeklyData = this.activityData.slice(dateEnteredIndex, dateEnteredIndex + 7);

    const activeMin = activeWeeklyData.reduce((avg, day) => {
      avg += day.minutesActive;
      return avg
    }, 0);

    return activeMin / activeWeeklyData.length;
  }

  meetsStepGoal(date) {
    const stepGoalDay = this.activityData.find(day => {
      return day.date === date;
    })

    if (stepGoalDay.numSteps >= this.dailyStepGoal) {
      return true;
    }else {
      return false;
    }
  }

  daysStepGoalAchieved() {
    const daysAchievedSteps = this.activityData.filter((day) => {
      return day.numSteps >= this.dailyStepGoal;
    }).map((day) => {
      return day.date;
    })

    return daysAchievedSteps;
  }

  bestStairDay() {
    const bestDayEver = this.activityData.sort((a, b) => {
      return a.flightsOfStairs - b.flightsOfStairs;
    }).pop()

    return bestDayEver.flightsOfStairs;
  }
};

module.exports = User;
