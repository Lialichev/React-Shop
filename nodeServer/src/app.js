import header from './components/header';
import footer from './components/footer';
import main from './components/main/main';
import $ from 'jquery';

const body = $('body');

import './scss/app.scss';

body.append(header());
body.append(main());
body.append(footer());