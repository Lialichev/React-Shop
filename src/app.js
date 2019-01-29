import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'babel-polyfill';
import AppComponent from './AppComponent';
import { store, runSaga } from './store';

import './normalize.scss';

runSaga();

const Wrapper = (
  <Provider store={store}>
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  </Provider>
);

ReactDom.render(Wrapper, document.getElementById('app'));
