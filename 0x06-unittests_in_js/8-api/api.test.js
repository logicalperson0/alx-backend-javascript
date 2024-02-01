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
});
