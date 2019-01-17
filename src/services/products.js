import { rest } from './rest';

const getProducts = id => rest.get(`public/products/${id}`);
const getProductsAll = () => rest.get('public/products/');

export { getProducts, getProductsAll };
