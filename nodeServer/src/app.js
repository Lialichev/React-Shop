const header = require('./components/header')();
const footer = require('./components/footer')();
const main = require('./components/main')();
const $ = require('jquery');

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);