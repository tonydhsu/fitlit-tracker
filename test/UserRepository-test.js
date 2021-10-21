const expect = require('chai').expect;
const UserRepository = require('../src/UserRepository.js');

describe('User Repository', () => {
  let data;
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
      hydrationData: []
    },
    {
      id: 2,
      name: 'Carly Collums',
      address: '4 North Pole',
      email: 'carly@northpole.com',
      strideLength: 4,
      dailyStepGoal: 4,
      friends: [1, 9, 11],
      hydrationData: []
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

  it('should retrieve average step goals of all users', function () {
    expect(userRepo.retrieveUsersAvgStepGoals()).to.deep.equal(7.5);
  });

  it.skip('should retrieve a random user', function () {
    expect(userRepo.retrieveRandomUser()).to.equal(0 || 1)
  })


});
