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

  returnAverageWaterPerDay() {
    let avgWater = this.hydrationData.reduce((avg, day) => {
      avg += day.numOunces
      return avg
    }, 0)
    return Math.floor(avgWater / this.hydrationData.length);
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

  returnAverageSleepPerDay() {
    let avgSleep = this.sleepData.reduce((avg, day) => {
      avg += day.hoursSlept
      return avg
    }, 0)
    return Math.floor(avgSleep / this.sleepData.length);
  }

  returnAverageSleepQualityPerDay() {
    let avgSleep = this.sleepData.reduce((avg, day) => {
      avg += day.sleepQuality
      return avg
    }, 0)
    return Math.floor(avgSleep / this.sleepData.length);
  }

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

  // returnWeeklySleepQuality(){
  //   const sleepWeeklyData = this.sleepData.slice(this.sleepData.length-7)
  //   const weeklySleep = sleepWeeklyData.map((day) => {
  //     return {date: day.date, sleepHours: day.sleepQuality}
  //   })
  //   return weeklySleep;
  // }

}

module.exports = User;
