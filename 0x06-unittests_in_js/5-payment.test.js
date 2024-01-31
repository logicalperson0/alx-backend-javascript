const { describe, it } = require('mocha');
const sinon = require('sinon');
const sendPay = require('./5-payment');
const expect = require('chai').expect;

describe('sendPay', function () {
  beforeEach('set spy to be used for the tests', function () {
    sinon.spy(console, 'log');
  });
  afterEach('restore spy', function () {
    console.log.restore();
  });

  it('chk that calnum is called and stubbed', function () {
    sendPay(100, 20);
    expect(console.log.withArgs('The total is: 120').calledOnce).to.be.true;
  });
  it('chk that calnum is called and stubbed', function () {
    sendPay(10, 10);

    expect(console.log.withArgs('The total is: 20').calledOnce).to.be.true;
  });
});
