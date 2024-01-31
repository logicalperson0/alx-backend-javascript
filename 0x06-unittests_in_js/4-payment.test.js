const { describe, it } = require('mocha');
const sinon = require('sinon');
const sendPay = require('./3-payment');
const Utils = require('./utils');
const assert = require('assert');

describe('sendPay', function () {
  it('chk that calnum is called and stubbed', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');

    sendPay(100, 20);
    assert(spy.withArgs(("The total is: 10")).calledOnce);
    assert(stub.withArgs('SUM', 100, 20).calledOnce);
  });
});
