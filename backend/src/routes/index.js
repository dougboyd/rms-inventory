import bodyParser from 'body-parser';
import models from '../models/';
/*
import uploadMiddleWare from '../middleware/media/uploadMiddleware';

const api = require('./api');
const graphqlHTTP = require('express-graphql');
const router = require('express').Router();
const jwtMiddleware = require('../middleware/token/token');

router.use('/check', (req, res) => {
  res.send('{"status": "RealYeti API is accessible"}');
});

router.use('/graphql', jwtMiddleware.verifyToken,
  bodyParser.json({ limit: '50mb' }), bodyParser.urlencoded({ limit: '50mb', extended: true }),
  uploadMiddleWare, graphqlHTTP({
    schema: models.graphql.schema,
    graphiql: false,
    formatError: error => ({
      message: error.message,
      state: error.originalError && error.originalError.state,
      locations: error.locations,
      path: error.path,
    }),
  }));

router.use('/', api);

module.exports = router;
*/