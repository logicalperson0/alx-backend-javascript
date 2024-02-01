const getPay = require('./6-payment_token');
const { it, describe } = require('mocha');
const expect = require('chai').expect;

describe('getPay', () => {
  it('async testing', (done) => {
    getPay(true)
      .then((data) => {
        expect(data).to.have.property('data');
        done();
      });
  });
});
