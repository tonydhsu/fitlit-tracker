const expect = require('chai').expect;
const User = require('../src/User.js');

describe('User', () => {
  let user;

  beforeEach(function() {
    user = new User({
      id: 1,
      name: 'Brian Peterson',
      address: '1 North Pole',
      email: 'brian@northpole.com',
      strideLength: 5,
      dailyStepGoal: 11,
      friends: [4, 9, 11],
      hydrationData: [
      {
        "userID": 1,
        "date": "2019/06/16",
        "numOunces": 95
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numOunces": 79
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numOunces": 57
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numOunces": 90
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numOunces": 70
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numOunces": 59
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "numOunces": 70
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "numOunces": 66
      },
    ],
      sleepData: [{
        userID: 1,
        date: "2019/06/16",
        hoursSlept: 9.6,
        sleepQuality: 4.7
      },
      {
        userID: 1,
        date: "2019/06/17",
        hoursSlept: 9,
        sleepQuality: 5
      },
      {
        userID: 1,
        date: "2019/06/18",
        hoursSlept: 8.3,
        sleepQuality: 6
      },
      {
        userID: 1,
        date: "2019/06/19",
        hoursSlept: 10,
        sleepQuality: 4.7
      },
      {
        userID: 1,
        date: "2019/06/20",
        hoursSlept: 9.5,
        sleepQuality: 5
      },
      {
        userID: 1,
        date: "2019/06/21",
        hoursSlept: 8.3,
        sleepQuality: 4.2
      },
      {
        userID: 1,
        date: "2019/06/22",
        hoursSlept: 6,
        sleepQuality: 3
      },
      {
        userID: 1,
        date: "2019/06/23",
        hoursSlept: 7,
        sleepQuality: 4
      }]
    })
  })

  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function () {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should store an id', function() {
    expect(user.id).to.equal(1);
  });

  it('should store a name', function() {
    expect(user.name).to.equal('Brian Peterson');
  });

  it('should store an address', function() {
    expect(user.address).to.equal('1 North Pole');
  });

  it('should store an email', function() {
    expect(user.email).to.equal('brian@northpole.com');
  });

  it('should store a strideLength', function() {
    expect(user.strideLength).to.equal(5);
  });

  it('should store a daily step goal', function() {
    expect(user.dailyStepGoal).to.equal(11);
  });

  it('should store an array of friends', function() {
    expect(user.friends).to.deep.equal([4, 9, 11]);
  });

  it('should return first name of user', function() {
    expect(user.returnFirstName()).to.equal('Brian');
  });

  it('should return the average water', function() {
    expect(user.returnAverageWaterPerDay()).to.equal(73)
  })

  it('should return the total water of a specific day', function() {
    expect(user.returnTotalWaterConsumption('2019/06/16')).to.equal(95)
  })

  it('should return the total water consumed in a week', function() {
    expect(user.returnWeeklyConsumption()).to.deep.equal(
      [{
        date: '2019/06/17',
        numOunces: 79
      },
      {
        date: '2019/06/18',
        numOunces: 57
      },
      {
        date: '2019/06/19',
        numOunces: 90
      },
      {
        date: '2019/06/20',
        numOunces: 70
      },
      {
        date: '2019/06/21',
        numOunces: 59
      },
      {
        date: '2019/06/22',
        numOunces: 70
      },
      {
        date: '2019/06/23',
        numOunces: 66
      },
    ]);
  });

  it('should return the average sleep per day', function() {
    expect(user.returnAverageSleepPerDay()).to.equal(8);
  });

  it('should return the average sleep quality per day', function() {
    expect(user.returnAverageSleepQualityPerDay()).to.equal(4);
  });

  it('should return the hours slept on a given date', function() {
    expect(user.returnSleepHoursThatDay("2019/06/20")).to.equal(9.5);
  });

  it('should return the sleep quality on a given date', function() {
    expect(user.returnSleepQualityThatDay("2019/06/20")).to.equal(5);
  });

  it('should return the hours slept over a 7 day period given a specific date', function() {
    expect(user.returnWeeklySleepHours("2019/06/17")).to.deep.equal([
      {
        date: "2019/06/16",
        hoursSlept: 9.6,
      },
      {
        date: "2019/06/17",
        hoursSlept: 9,
      },
      {
        date: "2019/06/18",
        hoursSlept: 8.3,
      },
      {
        date: "2019/06/19",
        hoursSlept: 10,
      },
      {
        date: "2019/06/20",
        hoursSlept: 9.5,
      },
      {
        date: "2019/06/21",
        hoursSlept: 8.3,
      },
      {
        date: "2019/06/22",
        hoursSlept: 6,
      }
    ])
  })

});
