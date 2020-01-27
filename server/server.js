const express = require('express');
const app = express();
const middlewares = require('./middlewares');
const routes = require('./routes');

middlewares(app);
routes(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`listen on the port ${PORT}`));
