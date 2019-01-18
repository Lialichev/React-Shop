import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import AppComponent from './AppComponent'
import { BrowserRouter } from 'react-router-dom';
import store from './store';

import './normalize.scss';

const Wrapper = (
  <Provider store={store}>
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  </Provider>
);

ReactDom.render(Wrapper, document.getElementById('app'));
