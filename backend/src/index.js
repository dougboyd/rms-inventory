const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan')('dev');
const methodOverride = require('method-override');
const errorhandler = require('errorhandler');

const routes = require('./routes');
/*
const passport = require('./middleware/authentication/passport');
const secret = require('./config/jwt.json');

const isProduction = process.env.NODE_ENV === 'production';

class App {
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    if (!isProduction) {
      this.express.use(errorhandler());
      this.express.use(logger);
    }

    this.express.use(methodOverride());
    this.express.use(express.static(`${__dirname}/public`));
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(bodyParser.json({ limit: '50Mb' }));
    this.express.use(helmet(), cors());
    this.express.use(session({
      secret: secret.expressSessionSecret,
      resave: false,
      saveUninitialized: false,
    }));
    this.express.use(passport.initialize());
    this.express.use(passport.session());
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
*/