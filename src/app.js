import ReactDom from 'react-dom';
import AppComponent from './AppComponent'
import { BrowserRouter } from 'react-router-dom';

import './normalize.scss';

const Wrapper = (
  <BrowserRouter>
    <AppComponent />
  </BrowserRouter>
);

ReactDom.render(Wrapper, document.getElementById('app'));
