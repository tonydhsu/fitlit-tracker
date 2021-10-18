const data = require('../src/data/users.js');


class UserRepository {
  constructor(data) {
    this.data = data;
  }

  retrieveUserData(id) {
    return this.data.find((user) => {
      return user.id === id;
    })
  }

  retrieveUsersAvgStepGoals(){
    let steps = this.data.reduce((avg, user) => {
      avg += user.dailyStepGoal
      return avg
    },0)
    return steps/this.data.length
  }

}

module.exports = UserRepository;
