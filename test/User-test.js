const expect = require('chai').expect;
const User = require('../src/User.js');

describe('User', () => {
  it('should be a function', function () {
    expect(User).to.be.a('function');
  });
});
