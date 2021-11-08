class Activity {
  constructor(data) {
    this.data = data;
  }

  retrieveActivityData(id) {
    return this.data.filter((user) => {
      return user.userID === id;
    });
  }

  retrieveGivenDateAverage(date, property) {
    const filterDate = this.data.filter((day) => {
      return day.date === date;
    })
    const activity = filterDate.reduce((avg, user) => {
      avg += user[property];
      return avg;
    }, 0);
    return Math.floor(activity / filterDate.length);
  }
}

module.exports = Activity;
