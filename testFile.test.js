const request = require('supertest');

const server = require('./api/server');

describe('server.js', () => {
  describe('get route', () => {
    it('should return an OK status code from the get route', async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get('/api/testing');
      expect(response.status).toEqual(expectedStatusCode);
    });
    it('should return the correct type of content', () => {
      request(server).get('/api/testing').expect('Content-Type', /json/);
    });
  });
});
