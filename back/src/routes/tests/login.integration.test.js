const createApiHelper = require('./helper');

let api;

describe('Login controller Integration test suite', () => {
  beforeAll(async (done) => {
    api = await createApiHelper();
    done();
  });

  it('success', (done) => {
    api.login('ariane@email.com', '123456')
      .then((response) => {
        expect(response.data).toBeDefined();
        expect(response.status).toEqual(200);
        done();
      })
      .catch(done);
  });

  it('failure', async (done) => {
    try {
      await api.login('notfound@mail.com', 'invalid');
    } catch (ex) {
      const { response: { data, status } } = ex;
      expect(status).toEqual(401);
      done();
    }
  });
});
