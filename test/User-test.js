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
      hydrationData: [{
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
      ]
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
    expect(user.returnAverageWaterPerDay()).to.equal(77)
  })

});
