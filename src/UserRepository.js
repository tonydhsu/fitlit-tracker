const dataFile = require('../src/data/users.js');
const data = dataFile.userData;

class UserRepository {
  constructor(data) {
    this.data = [data];
    console.log(data)
  }
  retrieveUserData(id) {
    return this.data.find((user) => {
      return user.id === id;
    })

  }

}

module.exports = UserRepository;
