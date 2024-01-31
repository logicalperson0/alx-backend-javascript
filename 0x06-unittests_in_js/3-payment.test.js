const { describe, it } = require('mocha');
const sinon = require('sinon');
const sendPay = require('./3-payment');
const Utils = require('./utils');
const assert = require('assert');

describe('sendPay', function () {
  it('chk that calnum is called', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPay(100, 20);
    assert(spy.calledOnce);
    spy.restore;
  });
});
