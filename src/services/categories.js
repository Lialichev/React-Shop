import { rest } from './rest';

const getInfo = () => rest.get('shop_info');
const getCategories = () => rest.get('public/categories');
const getCategory = id => rest.get(`public/categories/${id}`);
const updateCategory = category => rest.put(`categories/${category.id}`, category);
const createCategory = category => rest.post('categories', category);
const deleteCategory = id => rest.delete(`categories/${id}`);

export {
  getInfo,
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
};
