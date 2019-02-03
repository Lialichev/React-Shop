export const CREATE_USER = 'Create user';
export const createNewUser = data => ({ type: CREATE_USER, data });

export const SET_CREATE_USER = 'Create set user';
export const setCreateUser = data => ({ type: SET_CREATE_USER, data });

export const CLEAN_NEW_USER = 'Clean New user';
export const cleanNewUser = () => ({ type: CLEAN_NEW_USER });
