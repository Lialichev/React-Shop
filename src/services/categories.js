import { rest } from './rest';

const getInfo = data => rest.get('shop_info');

export { getInfo };
