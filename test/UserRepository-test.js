const expect = require('chai').expect;
const UserRepository = require('../src/UserRepository.js');

describe('User Repository', () => {
  let data;
  let sleepData;
  let userRepo;
  beforeEach(function() {
    data = [{
      id: 1,
      name: 'Brian Peterson',
      address: '1 North Pole',
      email: 'brian@northpole.com',
      strideLength: 5,
      dailyStepGoal: 11,
      friends: [4, 9, 11],
      hydrationData: [],
      sleepData: [],
      activityData: []
    },
    {
      id: 2,
      name: 'Carly Collums',
      address: '4 North Pole',
      email: 'carly@northpole.com',
      strideLength: 4,
      dailyStepGoal: 4,
      friends: [1, 9, 11],
      hydrationData: [],
      sleepData: [],
      activityData: []
    }]
    userRepo = new UserRepository(data);
  })

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of User Repository', function () {
    expect(userRepo).to.be.an.instanceOf(UserRepository);
  });

  it('should retrieve user data', function () {
    expect(userRepo.retrieveUserData(1)).to.deep.equal(data[0]);
  });

  it('should return undefined if no users', function() {
    expect(userRepo.retrieveUserData(10)).to.equal(undefined)
  })

  it('should retrieve average step goals of all users', function () {
    expect(userRepo.retrieveUsersAvgData('dailyStepGoal')).to.deep.equal(7.5);
  });

  it('should return the average sleep quality of all users', function() {
    data = [
      {
        userID: 1,
        date: "2019/06/15",
        hoursSlept: 6.1,
        sleepQuality: 2.2
      },
      {
        userID: 2,
        date: "2019/06/15",
        hoursSlept: 8.5,
        sleepQuality: 4
      },
      {
        userID: 3,
        date: "2019/06/15",
        hoursSlept: 7.5,
        sleepQuality: 3.5
      },
      {
        userID: 4,
        date: "2019/06/15",
        hoursSlept: 9,
        sleepQuality: 4
      },
      {
        userID: 5,
        date: "2019/06/15",
        hoursSlept: 7.2,
        sleepQuality: 3.2
      }
    ];
    userRepo = new UserRepository(data);

    expect(userRepo.retrieveUsersAvgData('sleepQuality')).to.equal(3.38);
  });

  it.skip('should return the average number of stairs climbed by all users on a given day', function() {
    activityData = [
      {
        userID: 1,
        date: "2019/06/15",
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 17
      },
      {
        userID: 2,
        date: "2019/06/15",
        numSteps: 4307,
        minutesActive: 180,
        flightsOfStairs: 22
      },
      {
        userID: 3,
        date: "2019/06/15",
        numSteps: 3701,
        minutesActive: 160,
        flightsOfStairs: 18
      }
    ]

    userRepo = new UserRepository(activityData);

    expect(userRepo.retrieveGivenDateAverage("2019/06/15", "flightsOfStairs")).to.equal(19);
  });

  it.skip('should return the average number of steps taken by all users on a given day', function() {
    activityData = [
      {
        userID: 1,
        date: "2019/06/15",
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 17
      },
      {
        userID: 2,
        date: "2019/06/15",
        numSteps: 4307,
        minutesActive: 180,
        flightsOfStairs: 22
      },
      {
        userID: 3,
        date: "2019/06/15",
        numSteps: 3701,
        minutesActive: 160,
        flightsOfStairs: 18
      }
    ]

    userRepo = new UserRepository(activityData);

    expect(userRepo.retrieveGivenDateAverage("2019/06/15", "numSteps")).to.equal(3861);
  })

  it.skip('should return the average number of minutes active by all users on a given day', function() {
    activityData = [
      {
        userID: 1,
        date: "2019/06/15",
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 17
      },
      {
        userID: 2,
        date: "2019/06/15",
        numSteps: 4307,
        minutesActive: 180,
        flightsOfStairs: 22
      },
      {
        userID: 3,
        date: "2019/06/15",
        numSteps: 3701,
        minutesActive: 160,
        flightsOfStairs: 18
      }
    ]

    userRepo = new UserRepository(activityData);

    expect(userRepo.retrieveGivenDateAverage("2019/06/15", "minutesActive")).to.equal(160);
  })
});
