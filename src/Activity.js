class Activity {
  constructor(data) {
    this.data = data;
  }

  retrieveActivityData(userId) {
    return this.data.filter((user) => {
      return user.userID === userId;
    });
  }
}

module.exports = Activity;
