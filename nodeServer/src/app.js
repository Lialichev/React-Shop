const header = require('./components/header')();
const footer = require('./components/footer')();
const main = require('./components/main')();
const $ = require('jquery');
const body = $('body');

body.append(header);
body.append(main);
body.append(footer);