class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
    this.hydrationData = userData.hydrationData
  }

  returnFirstName () {
    return this.name.split(' ')[0]
  }

  returnAverageWaterPerDay() {
    let avgWater = this.hydrationData.reduce((avg, day) => {
      avg += day.numOunces
      return avg
    }, 0)
    return avgWater / this.hydrationData.length;
  }

  returnTotalWaterConsumption(date) {
     const waterPerDay = this.hydrationData.find((day) => {
       return day.date === date;
    })
    return waterPerDay.numOunces
  }
}

module.exports = User;
