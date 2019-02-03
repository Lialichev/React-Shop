import { SET_CREATE_USER, CLEAN_NEW_USER } from './actions';
import { createUser as initial } from '../initialState';

export const createUser = (state = initial, action) => {
  switch (action.type) {
    case SET_CREATE_USER: {
      return action.data
    }
    case CLEAN_NEW_USER: {
      return initial;
    }
  }

  return state;
};
