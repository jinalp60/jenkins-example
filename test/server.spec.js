const supertest = require('supertest');
const expressApp = require('../server.js');

const app = supertest(expressApp);
describe('GET /', function() {
  it('respond with hello world !!', function(done) {
    //navigate to root and check the the response is "hello world !!"
    app.get('/').expect('hello world !!xxx', done);
  });
});
