import { combineReducers } from 'redux';

import picturesReducer from './pictureReducer';

export default combineReducers({
  pictures: picturesReducer,
});
