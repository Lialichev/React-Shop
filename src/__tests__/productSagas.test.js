import {fetchProduct} from 'store/product';
import {runSaga} from "redux-saga";

const MockProduct = {name: 'Toy'};
jest.mock('../services', () => ({
    getProducts: () => MockProduct
  })
);

describe('productSagas', () => {
  it('should send product to store', () => {
    let action;
    const argument = { data: 'test' };

    runSaga({
      dispatch: data => action = data
    },
      fetchProduct,
      argument
    );

    expect(action.data).toEqual(MockProduct);
  });
});
