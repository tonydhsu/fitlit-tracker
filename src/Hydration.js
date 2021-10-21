class Hydration {
  constructor(waterData) {
    this.data = waterData;
  }

  // assignInfoToUser() {
  //   this.data.map((element) => {
  //     if(user.id === element.userID) {
  //       return user.hydrationData.push(element);
  //     }
  //   })
  // }

  retrieveWaterData(id) {
    return this.data.filter((user) => {
      return user.userID === id;
    })
  }

  averageWaterDrank(id) {
    let water = this.retrieveWaterData(id);
    let average = water.reduce((sum, day) => {
      sum += day.numOunces;
      return sum;
    }, 0)
    return average/water.length
  }
}

module.exports = Hydration;
// For a user, identified by ID, average fluid ouces consumed per day for all time
//
// for a user, how many fluid ounces they consumed for a specific day(identified by a date)
//
// For a user, how many fluid ounces of water consumed each day over a course of a week(7days)- return the amount for each day
