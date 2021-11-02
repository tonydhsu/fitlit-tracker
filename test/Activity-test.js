const expect = require('chai').expect;
const Activity = require('../src/Activity.js');

describe('Activity', () => {
  let activity;

  beforeEach(function() {
    const activityData = [{
        userID: 1,
        date: "2019/06/15",
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 16
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
      }];

    activity = new Activity(activityData);
  });

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', function() {
    expect(activity).to.be.an.instanceOf(Activity);
  });

  it('should be able to take in activity data', function() {
    const activityData = [{
        userID: 1,
        date: "2019/06/15",
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 16
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
      }];

    expect(activity.data).to.deep.equal(activityData);
  })

  it('should retrieve a users activity data', function() {
    expect(activity.retrieveActivityData(2)).to.deep.equal([{
      userID: 2,
      date: "2019/06/15",
      numSteps: 4307,
      minutesActive: 180,
      flightsOfStairs: 22
    }]);
  });
});
