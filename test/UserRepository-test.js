const expect = require('chai').expect;
const UserRepository = require('../src/UserRepository.js');
const dataFile = require('../src/data/users.js')
const data = dataFile.userData;
console.log(data)


describe('User Repository', () => {
  let data;
  let userRepo;
  beforeEach(function() {
    data = {
      id: 1,
      name: 'Brian Peterson',
      address: '1 North Pole',
      email: 'brian@northpole.com',
      strideLength: 5,
      dailyStepGoal: 11,
      friends: [4, 9, 11],
    }
    userRepo = new UserRepository(data);
  })

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of User Repository', function () {
    expect(userRepo).to.be.an.instanceOf(UserRepository);
  });

  it('should retrieve user data', function () {
    expect(userRepo.).to.be.an.instanceOf(UserRepository);
  });










});
