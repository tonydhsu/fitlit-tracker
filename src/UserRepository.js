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

}

module.exports = UserRepository;
