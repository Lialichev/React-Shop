const $ = require('jquery');
const header = require('../../sctipts/elementBuilder');

require('./header.scss');

module.exports = () => header('header', `<a href="/">Logo</a>`, 'header');