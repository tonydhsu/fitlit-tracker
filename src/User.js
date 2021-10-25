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
  }

  returnFirstName () {
    return this.name.split(' ')[0]
  }

  returnUserAverageDataPerDay(data, property) {
    let totalData = this[data].reduce((avg, day) => {
      avg += day[property]
      console.log(avg, "avg")
      return avg
    }, 0)
    console.log(totalData)
    return Math.floor(totalData / this[data].length);
  }

  returnTotalWaterConsumption(date) {
     const waterPerDay = this.hydrationData.find((day) => {
       return day.date === date;
    })
    return waterPerDay.numOunces
  }

  returnWeeklyConsumption(){
    const waterWeeklyData = this.hydrationData.slice(this.hydrationData.length-7)
    const weeklyWater = waterWeeklyData.map((day) => {
      return {date: day.date, numOunces: day.numOunces}
    })
    return weeklyWater;
  }

  // returnAverageSleepPerDay() {
  //   let avgSleep = this.sleepData.reduce((avg, day) => {
  //     avg += day.hoursSlept
  //     return avg
  //   }, 0)
  //   return Math.floor(avgSleep / this.sleepData.length);
  // }
  //
  // returnAverageSleepQualityPerDay() {
  //   let avgSleep = this.sleepData.reduce((avg, day) => {
  //     avg += day.sleepQuality
  //     return avg
  //   }, 0)
  //   return Math.floor(avgSleep / this.sleepData.length);
  // }

  returnSleepHoursThatDay(date) {
     const sleepPerDay = this.sleepData.find((day) => {
       return day.date === date;
    })
    return sleepPerDay.hoursSlept
  }

  returnSleepQualityThatDay(date) {
     const sleepQualityPerDay = this.sleepData.find((day) => {
       return day.date === date;
    })
    return sleepQualityPerDay.sleepQuality
  }

  returnWeeklySleepHours(dateEntered) {
    const dateEnteredIndex = this.sleepData.indexOf(this.sleepData.find(dateSlept => {
      return dateSlept.date === dateEntered;
    }))

    const sleepHoursWeeklyData = this.sleepData.slice(dateEnteredIndex, dateEnteredIndex + 7);

    const weeklySleepHours = sleepHoursWeeklyData.map((day) => {
      return {date: day.date, hoursSlept: day.hoursSlept}
    })
    return weeklySleepHours;
  }

  returnWeeklySleepQuality(dateEntered) {
    const dateEnteredIndex = this.sleepData.indexOf(this.sleepData.find(dateSlept => {
      return dateSlept.date === dateEntered;
    }))

    const sleepQualityWeeklyData = this.sleepData.slice(dateEnteredIndex, dateEnteredIndex + 7);

    const weeklySleep = sleepQualityWeeklyData.map((day) => {
      return {date: day.date, sleepQuality: day.sleepQuality}
    })
    return weeklySleep;
  }
}

module.exports = User;
