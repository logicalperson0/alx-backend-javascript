const assert = require("chai").expect;
const { it, describe } = require("mocha");
const calNum = require("./2-calcul_chai");
const { expect } = require("chai");

describe('calNum()', function() {
  it('chk if nums are same as result', function() {
    expect(calNum('SUM', 1.4, 4.5)).to.equal(6);
  });
  it('chk if num are rounded', function() {
    expect(calNum('SUM', 1, 3.7)).to.equal(5);
  });
  it('chk if nums are rounded', function() {
    expect(calNum('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('chk if result is same as excepted', function() {
    expect(calNum('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('chk if result is same as excepted', function() {
    expect(calNum('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
