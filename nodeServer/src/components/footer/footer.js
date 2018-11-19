const $ = require('jquery');
const footer = require('../../sctipts/elementBuilder');

require('./footer.css');

module.exports = () => footer('footer', `<p>Easycode 2019 (c)</p>`, 'footer');
