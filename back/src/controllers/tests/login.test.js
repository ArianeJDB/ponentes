const login = require('../login');

jest.mock('jsonwebtoken', () => ({
  sign(payload, secret) {
    return `${payload}${secret}`;
  },
}));


describe('Login Unit Test Suite', () => {
  it('returns 201 when everything is ok', () => {
    const reqMocked = { body: { email: 300 } };
    const res = {
      _status: 100,
      status(status) {
        this._status = status;
        return this;
      },
      send(response) {
        return { statusCode: this._status, response: JSON.stringify(response) };
      },
    };
    const resultado = login(reqMocked, res);
    expect(resultado.statusCode).toEqual(200);
    expect(resultado.response).toBeDefined();
  });
});
