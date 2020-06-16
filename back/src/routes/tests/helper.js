const axios = require('axios');
const runApi = require('../../index');

const port = 8443;

const httpClient = axios.create({
  baseURL: `http://localhost:${port}/`,
});

const logInUser = (token) => { httpClient.defaults.headers.authorization = `Bearer ${token}`; };
const logOutUser = () => { delete httpClient.defaults.headers.authorization; };

const createApi = async () => {
  const api = await runApi(port);
  return {
    logInUser,
    logOutUser,
    close: () => api.close(),
    getSpeaker: (id) => httpClient.get(`/speakers/${id}`),
    register: (data) => httpClient.post('/register', data),
    deleteSpeaker: (id) => httpClient.delete(`/speakers/${id}`),
    createTalk: (speakerId, talk) => httpClient.post(`/speakers/${speakerId}`, talk),
    login: (email, password) => httpClient.post('/login', { email, password }),
  };
};

const startServer = async () => createApi();

afterAll(async () => {
  const server = await startServer();
  server.close();
});

module.exports = createApi;
