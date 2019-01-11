import { rest } from './rest';

const getProdust = id => rest.get(`public/products/${id}`);

export { getProdust };
