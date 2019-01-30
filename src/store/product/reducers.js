import {
  SET_PRODUCT,
  CLEAR_PRODUCT,
} from './actions';
import { product as initial } from '../initialState';

export const product = (state = initial, action) => {
  switch (action.type) {
    case SET_PRODUCT: {
      return action.data;
    }
    case CLEAR_PRODUCT: {
      return initial;
    }
  }

  return state;
};
