class Hydration {
  constructor(waterData) {
    this.data = waterData;
  }

  retrieveWaterData(id) {
    return this.data.filter((user) => {
      return user.userID === id;
    })
  }
}

module.exports = Hydration;
