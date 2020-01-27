import {
  FETCH_PICTURE,
  FETCHING_PICTURE_SUCCESS,
  FETCHING_PICTURE_FAIL,
} from './actionsTypes';
import { getListPictures } from '../service/pictureService';

export const fetchPicture = () => async dispatch => {
  try {
    dispatch({ type: FETCH_PICTURE });

    const pictures = await getListPictures();
    console.log('action', pictures);
    dispatch({
      type: FETCHING_PICTURE_SUCCESS,
      payload: pictures,
    });
  } catch (e) {
    dispatch({
      type: FETCHING_PICTURE_FAIL,
      payload: e,
    });
  }
};
