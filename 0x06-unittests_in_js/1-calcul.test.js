const assert = require("assert");
const { it, describe } = require("mocha");
const calNum = require("./1-calcul");

describe('calNum()', function() {
  it('chk if nums are same as result', function() {
    const result = calNum('SUM', 1.4, 4.5);
    assert.strictEqual(result, 6);
  });
  it('chk if num are rounded', function() {
    const result = calNum('SUM', 1, 3.7);
    assert.strictEqual(result, 5);
  });
  it('chk if nums are rounded', function() {
    const result = calNum('SUBTRACT', 1.4, 4.5);
    assert.strictEqual(result, -4);
  });
  it('chk if result is same as excepted', function() {
    const result = calNum('DIVIDE', 1.4, 4.5);
    assert.strictEqual(result, 0.2);
  });
  it('chk if result is same as excepted', function() {
    const result = calNum('DIVIDE', 1.4, 0);
    assert.strictEqual(result, 'Error');
  });
});
