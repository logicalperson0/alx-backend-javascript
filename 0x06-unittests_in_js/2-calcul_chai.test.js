const chai = require('chai');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber type == SUM', () => {
  it('checks the output is correct', () => {
    chai.expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    chai.expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    chai.expect(calculateNumber('SUM', 3.7, 1)).to.equal(5);
    chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    chai.expect(calculateNumber('SUM', -1, 1)).to.equal(0);
    chai.expect(calculateNumber('SUM', -1, -1)).to.equal(-2);
  });
});

describe('calculateNumber type == SUBTRACT', () => {
  it('checks the output is correct', () => {
    chai.expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    chai.expect(calculateNumber('SUBTRACT', 3.1, 2.5)).to.equal(0);
    chai.expect(calculateNumber('SUBTRACT', 4.5, 2)).to.equal(3);
    chai.expect(calculateNumber('SUBTRACT', 2, 4.5)).to.equal(-3);
    chai.expect(calculateNumber('SUBTRACT', -1, 1)).to.equal(-2);
    chai.expect(calculateNumber('SUBTRACT', -1.5, 0)).to.equal(-1);
  });
});

describe('calculateNumber type == DIVIDE', () => {
  it('check the output is correct', () => {
    chai.expect(calculateNumber('DIVIDE', 0.0, 2)).to.equal(0);
    chai.expect(calculateNumber('DIVIDE', -1, 1)).to.equal(-1);
    chai.expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
});