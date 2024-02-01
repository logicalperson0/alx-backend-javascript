const request = require('request');
const expect = require('chai').expect;

describe('API test', () => {
  const URL = 'http://localhost:7865';
  const Wel = 'Welcome to the payment system';

  it('/ returns correct response', (done) => {
    request.get(`${URL}`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal(`${Wel}`);
      done();
    });
  });

  it('returns correct res for id', (done) => {
    request.get(`${URL}/cart/12`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 12');
      done();
    });
  });

  it('returns the 404 res for id when given non-num', (done) => {
    request.get(`${URL}/cart/hello`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  })
});
