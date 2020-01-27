import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(applyMiddleware(thunkMiddleware));

export default middleware;
