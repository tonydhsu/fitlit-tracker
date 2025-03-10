class UserRepository {
  constructor(userData) {
    this.data = userData;
  }

  retrieveUserData(id) {
    return this.data.find((user) => {
      return user.id === id;
    });
  }

  retrieveUsersAvgData(property) {
    const totalAmount = this.data.reduce((avg, user) => {
      avg += user[property];
      return avg;
    }, 0);
    return totalAmount / this.data.length;
  }

  retrieveRandomUser() {
    return Math.floor(Math.random() * this.data.length);
  }
}


module.exports = UserRepository;
