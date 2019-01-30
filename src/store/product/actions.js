export const GET_PRODUCT = 'Get one product';
export const getProduct = data => ({ type: GET_PRODUCT, data });

export const SET_PRODUCT = 'Set one product';
export const setProduct = data => ({ type: SET_PRODUCT, data });

export const CLEAR_PRODUCT = 'Clear one product';
export const clearProduct = () => ({ type: CLEAR_PRODUCT });
