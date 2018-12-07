import ReactDom from 'react-dom';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import List from './components/list';

import './normalize.scss';

const items = [
  { id: 1, name: 'Vyasia' },
  { id: 2, name: 'Petya' },
  { id: 3, name: 'Marco' },
];

const Wrapper = (
  <>
    <List items={items} />
    <Header />
    <Main title="Main" />
    <Footer />
  </>
);

ReactDom.render(Wrapper, document.getElementById('app'));
