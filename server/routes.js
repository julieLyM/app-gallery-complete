const picturesRouter = require('./router/picturesRoute');

function routes(app) {
  app.use('/api/v1/pictures/', picturesRouter);
}

module.exports = routes;
