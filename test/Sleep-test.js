const expect = require('chai').expect;
const Sleep = require('../src/Sleep');

describe('Sleep', () => {

  let sleep;

  beforeEach(function() {
    const sleepData = [{
      userID: 1,
      date: "2019/06/16",
      hoursSlept: 9.6,
      sleepQuality: 4.7
    },
    {
      userID: 2,
      date: "2019/06/16",
      hoursSlept: 6.6,
      sleepQuality: 3.4
    },
    {
      userID: 3,
      date: "2019/06/16",
      hoursSlept: 5.1,
      sleepQuality: 2.7
    }]

    sleep = new Sleep(sleepData)
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function')
  });

  it('should be an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceOf(Sleep)
  });

  it('should retrieve a users sleep data', function() {
    expect(sleep.retrieveSleepData(1)).to.deep.equal([{
      userID: 1,
      date: "2019/06/16",
      hoursSlept: 9.6,
      sleepQuality: 4.7
    }]);
  });

  it('should return an empty array if no data is found', function() {
    expect(sleep.retrieveSleepData(9)).to.deep.equal([])
  })
});
