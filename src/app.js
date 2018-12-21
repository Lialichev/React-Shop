import ReactDom from 'react-dom';
import AppComponent from './AppComponent'
import Footer from './components/footer';

import './normalize.scss';

const Wrapper = (
  <>
    <AppComponent />
    <Footer />
  </>
);

ReactDom.render(Wrapper, document.getElementById('app'));
