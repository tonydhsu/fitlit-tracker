class Sleep {
  constructor(sleepData) {
    this.data = sleepData;
  }

  retrieveSleepData(id) {
    return this.data.filter((user) => {
      return user.userID === id;
    })
  }
}

module.exports = Sleep;
