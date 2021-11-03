const expect = require('chai').expect;
const Hydration = require('../src/Hydration')

describe('Hydration', () => { 

  let hydration;

  beforeEach(function() {
    const hydrationData = [{
      "userID": 1,
      "date": "2019/06/16",
      "numOunces": 95
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "numOunces": 79
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "numOunces": 57
    }]

    hydration = new Hydration(hydrationData)
  })

  it('should be a function', function() {
    expect(Hydration).to.be.a('function')
  })

  it('should be an instance of Hydration', function() {
    const hydration = new Hydration()
    expect(hydration).to.be.an.instanceOf(Hydration)
  }) 

  it('should retrieve a users water data', function() {
    expect(hydration.retrieveWaterData(1)).to.deep.equal([{
      "userID": 1,
      "date": "2019/06/16",
      "numOunces": 95
    }])
  })

  it('should return an empty array if no data is found', function() {
    expect(hydration.retrieveWaterData(100)).to.deep.equal([])
  })
});