const header = require('./components/header/header')();
const footer = require('./components/footer/footer')();
const main = require('./components/main/main')();
const $ = require('jquery');
const body = $('body');

require('./scss/app.scss');

body.append(header);
body.append(main);
body.append(footer);