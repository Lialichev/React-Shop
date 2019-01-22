export const GET_INFO = 'Get info';
export const getInfo = () => ({ type: GET_INFO });

export const SET_INFO = 'Set info';
export const setInfo = data => ({ type: SET_INFO, data });

export const CLEAN_INFO = 'Clean info';
export const cleanInfo = () => ({ type: CLEAN_INFO });
