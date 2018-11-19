const header = require('./components/header/header')();
const footer = require('./components/footer/footer')();
const main = require('./components/main')();
const $ = require('jquery');
const body = $('body');

require('./app.css');

body.append(header);
body.append(main);
body.append(footer);