const faker = require('faker');
const createApiHelper = require('./helper');

let api;

describe('Speaker controller Integration test suite', () => {
  beforeAll(async (done) => {
    api = await createApiHelper();
    done();
  });

  it('should returns 201 when user is created', async (done) => {
    const body = {
      email: faker.internet.email().toLowerCase(),
      password: '12345',
      name: 'Test McTest',
      talks: [],
    };
    api.register(body)
      .then(async (response) => {
        expect(response.status).toEqual(201);
        const res = response.data;
        expect(res.success).toEqual(true);
        expect(res.data.email).toEqual(body.email);
        expect(res.data).not.toHaveProperty('password');
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });

  it('should add talk to existing user', async () => {
    const user = await api.register({ email: faker.internet.email().toLowerCase(), password: '123456', name: 'Pepeillo' });

    const talkBody = { title: 'Accesibility' };

    const createdTalk = await api.createTalk(user.data.data._id, talkBody);
    const speaker = await api.getSpeaker(user.data.data._id);
    const { talks } = speaker;
    const found = talks.find((talk) => talk._id === createdTalk._id);
    expect(found).toBeDefined();
  });
});
