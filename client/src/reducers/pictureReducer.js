import {
  FETCH_PICTURE,
  FETCHING_PICTURE_FAIL,
  FETCHING_PICTURE_SUCCESS,
} from '../actions/actionsTypes';

// const DEFAULT_STATE = {
//   pictures: [],
//   isLoading: false,
//   error:
// };

const pictureReducer = (state = [], { type, payload }) => {
  if (type === FETCH_PICTURE) {
    return [...state];
  } else if (type === FETCHING_PICTURE_SUCCESS) {
    return [...state, ...payload];
  } else if (type === FETCHING_PICTURE_FAIL) {
    return state;
  }
  return state;
};

export default pictureReducer;
