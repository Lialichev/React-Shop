import { SET_INFO, CLEAN_INFO } from './actions';
import {
  category as categoryInit,
  info as infoInit
} from '../initialState';

export const category = (state = categoryInit, action) => {
  switch (action.type) {
    case 'default': {
      return action.data;
    }
  }

  return state;
};

export const info = (state = infoInit, action) => {
  switch (action.type) {
    case SET_INFO: {
      return action.data;
    }
    case CLEAN_INFO: {
      return infoInit;
    }
  }

  return state;
};
