class UserRepository {
  constructor(userData) {
    this.data = userData;
  }

  retrieveUserData(id) {
    return this.data.find((user) => {
      return user.id === id;
    })
  }

  retrieveUsersAvgStepGoals() {
    let steps = this.data.reduce((avg, user) => {
      avg += user.dailyStepGoal
      return avg
    }, 0)
    return steps / this.data.length
  }

  retrieveUsersAvgSleepQuality() {
    let sleepQuality = this.data.reduce((avg, user) => {
      avg += user.sleepQuality
      return avg
    }, 0)
    return sleepQuality / this.data.length
  }

  retrieveRandomUser() {
    return Math.floor(Math.random() * this.data.length)
  }

}

module.exports = UserRepository;
