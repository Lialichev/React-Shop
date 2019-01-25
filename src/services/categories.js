import { rest } from './rest';

const getInfo = data => rest.get('shop_info');
const getCategories = () => rest.get('public/categories');
const getCategory = id => rest.get(`public/categories/${id}`);
const createCategory = data => rest.post('categories', data);
const updateCategory = id => rest.put(`categories/${id}`);
const deleteCategory = () => console.log('Test del category successful');

export {
  getInfo,
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
};
