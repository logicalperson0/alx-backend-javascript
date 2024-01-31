const assert = require("assert");
const { it, describe } = require("mocha");
const calNum = require("./0-calcul");

describe('calNum()', function() {
  it('chk if nums are same as result', function() {
    const result = calNum(1, 3);
    assert.strictEqual(result, 4);
  });
  it('chk if num are rounded', function() {
    const result = calNum(1, 3.7);
    assert.strictEqual(result, 5);
  });
  it('chk if nums are rounded', function() {
    const result = calNum(1.2, 3.7);
    assert.strictEqual(result, 5);
  });
  it('chk if result is same as excepted', function() {
    const result = calNum(1.5, 3.7);
    assert.strictEqual(result, 6);
  });
});
