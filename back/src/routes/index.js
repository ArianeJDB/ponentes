const express = require('express');

const createAdminRouter = require('./admin');
const createLoginRouter = require('./login');
const createSpeakersRouter = require('./speakers');

const createRouter = () => {
  const router = express.Router();
  createAdminRouter(router);
  createLoginRouter(router);
  createSpeakersRouter(router);
  return router;
};

module.exports = createRouter;
