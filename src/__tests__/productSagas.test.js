import { fetchProduct } from 'store/product';
import { runSaga } from "redux-saga";

const MockProduct = {name: 'Toy'};
jest.mock('../services', () => ({
    getProducts: () => MockProduct
  })
);

describe('productSagas', () => {
  it('should send product to store', () => {
    let action;

    runSaga({
      dispatch: data => action = data
    }, fetchProduct);

    expect(action.data).toEqual(MockProduct);
  });
});
